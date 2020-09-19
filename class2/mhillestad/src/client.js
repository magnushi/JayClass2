import sanityClient from "@sanity/client"

const Client = sanityClient ({
    projectId: "a4h9jd10",
    dataset: "production"
})

export default Client ;