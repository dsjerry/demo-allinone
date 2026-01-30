import express from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
import { Client } from 'minio';

import 'dotenv/config';

const app = express();
const upload = multer();
app.use(express.json());


const minio = new Client({
  endPoint: process.env.MINIO_ENDPOINT || '127.0.0.1',
  port: Number(process.env.MINIO_PORT || 9000),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_KEY || 'minioadmin',
  secretKey: process.env.MINIO_SECRET || 'minioadmin'
});

const BUCKET = process.env.MINIO_BUCKET || 'onlyoffice';

// OnlyOffice 回调
app.post('/onlyoffice/callback', upload.any(), async (req, res) => {
  try {
    const { status, url, filetype } = req.body || {};
    if (status === 2 || status === 6) {
      let buf: Buffer;

      if (url) {
        const r = await fetch(url);
        if (!r.ok) throw new Error(`download fail: ${r.status}`);
        buf = Buffer.from(await r.arrayBuffer());
      } else if (req.files?.[0]) {
        buf = (req.files[0] as any).buffer;
      } else {
        throw new Error('no file from callback');
      }

      const objectName = `doc_${Date.now()}.${filetype || 'docx'}`;
      await minio.putObject(BUCKET, objectName, buf);
      console.log('saved to minio:', objectName, 'size:', buf.length);
    }
    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.status(500).send(String(err));
  }
});

const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => console.log(`callback server on ${process.env.MINIO_ENDPOINT}:${PORT}`));