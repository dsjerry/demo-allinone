type LoadingState = {
    state: "loading"
}

type SuccessState = {
    state: "success"
    coords: { lat: number; lon: number }
}
