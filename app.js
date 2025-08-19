document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("postContainer");

  // Render all posts
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.summary}</p>
          <button class="btn btn-primary" onclick="viewPost(${post.id})">View</button>
        </div>
      </div>
    `;

    postContainer.appendChild(card);
  });
});

// Modal view logic
function viewPost(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  document.getElementById("viewPostTitle").textContent = post.title;
  document.getElementById("viewPostContent").textContent = post.content;

  const modal = new bootstrap.Modal(document.getElementById("viewPostModal"));
  modal.show();
}
