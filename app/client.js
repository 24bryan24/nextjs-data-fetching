import client from "@sanity/client"

export default client({
  projectId: "t1j250dd",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-07",
})