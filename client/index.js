async function fetchData() {
  const response = await fetch("http://localhost:9999/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query: "query { greeting }" }),
  });

  const { data } = await response.json();
  return data.greeting;
}

(async function fetchDataToUpdateUI() {
  const data = await fetchData();
  const messageElement = document.getElementById("message");
  messageElement.textContent = data;
})();
