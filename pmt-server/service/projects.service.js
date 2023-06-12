export async function addProject(data) {
  return await client
      .db("PMT")
      .collection("projects")
      .insertMany(data);
}

export async function getAllProjects() {
    return await client
        .db("PMT")
        .collection("projects")
        .find({});
  }