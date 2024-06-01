const API_URL = "https://jsonplaceholder.typicode.com/";

export async function getPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`);

    if (!res.ok) throw new Error("Failed getting all posts");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPost(id) {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`);

    if (!res.ok) throw new Error("Failed getting post's details");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getComments(id) {
  try {
    const res = await fetch(`${API_URL}/posts/${id}/comments`);

    if (!res.ok) throw new Error("Failed getting post's details");

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/users`);

    if (!res.ok) throw new Error("Failed getting all users");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function addPost(obj) {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!res.ok) throw new Error();

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(id) {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed deleting post");

    const data = res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updatePost(obj) {
  console.log(obj)
  try {
    const res = await fetch(`${API_URL}/posts/${obj.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...obj,
        title: obj.title,
        body: obj.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!res.ok) throw new Error(`Failed updating post ${obj.id}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
