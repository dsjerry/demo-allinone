import path from 'path';

export function getPath(str: string) {
    return path.join(process.cwd(), str);
}