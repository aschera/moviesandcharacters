import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  const ul = document.getElementById("output");
  const loading = props.loading;

  return (
    <div className="UserOutput">
      {loading ? (
        <h2 className="loading-text">Loading the data! ...</h2>
      ) : (
        '')}

        <ul id="output" className="Output">
          {props.output.map(function (item) {
            try {
              let li = createNode(
                  "li",
                  "output-li",
                  item.episode_id,
                  item.opening_crawl,
                  item.title,
                  item.director
                ),
                id = createNode("span", "output-span"),
                title = createNode("span", "output-span"),
                date = createNode("span", "output-span");

              id.innerHTML = ` Episode ${item.episode_id} `;

              title.innerHTML = ` ${item.title}  `;
              date.innerHTML = ` ${item.release_date}`;

              append(li, id);
              append(li, title);
              append(li, date);
              append(ul, li);

              return true;
            } catch (error) {
              console.error(error);
              return false;
            }
          })}
        </ul>

      <div className="description">
        <div id="description-text">{loading ? "" : `${props.movieInfo}`}</div>
      </div>
    </div>
  );
};

function createNode(element, elClass, id, title, summary, director) {
  let el = document.createElement(element);
  el.classList.add(elClass);
  if (summary) {
    el.addEventListener(
      "click",
      function (e) {
        editUldDetails(id, title, summary, director);
      },
      false
    );
  }
  return el;
}

function editUldDetails(i, s, t, d) {
  const summary = document.getElementById("description-text");
  summary.innerHTML = `
    <h2>Summary</h2>
    <p>${s}</p>
    <hr>
    <p>Episode nr: ${i}</p>
    <p>Title: ${t}</p>
    <p>Directed by: ${d}</p>`;
}

/* ------ create list of nodes ------ */
function append(parent, el) {
  return parent.appendChild(el);
}

export default UserOutput;
