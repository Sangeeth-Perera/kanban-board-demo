import React, { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import OutlinedCard from "./components/Card";
import { ITask } from "./types/task.t";
import tasks from "./data/data.json";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(tasks);

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element: any = evt.currentTarget;
    element?.classList?.add("dragged");
    evt.dataTransfer.setData("text/plain", evt?.currentTarget?.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("dragged");
  };
  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let element = event.currentTarget;
    element.classList.add("dragged-over");
    event.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = event.currentTarget;
    let newTarget: any = event.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    event.preventDefault();
    let element = event.currentTarget;
    element.classList.remove("dragged-over");
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragged-over");
    let data = event.dataTransfer.getData("text");
    let tasks = taskList;
    let updatedList = tasks.map((task: ITask) => {
      if (task.id === data.toString()) {
        task.status = status;
      }
      return task;
    });
    setTaskList(updatedList);
  };

  return (
    <div className="App">
      <header style={{ margin: "10px" }}>
        <h2>Kanban Board</h2>
      </header>
      <Grid container>
        <Grid item xs={4} lg={4}>
          New
        </Grid>
        <Grid item xs={4} lg={4}>
          Inprogress
        </Grid>
        <Grid item xs={4} lg={4}>
          Done
        </Grid>
        <Grid item xs={4} lg={4}>
          <div
            className="order small-box"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, false, "new")}
          >
            <div style={{ padding: "10px" }}>
              <button style={{ width: "100%", padding: "20px" }}>+</button>
            </div>
            {taskList.map(
              (task) =>
                task.status === "new" && (
                  <div
                    className="card"
                    key={task.id}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <Grid item xs={12} sx={{ padding: "10px" }}>
                      <OutlinedCard
                        title={task.title}
                        description={task.description}
                        url={task.url}
                      />
                    </Grid>
                  </div>
                )
            )}
          </div>
        </Grid>
        <Grid item xs={4} lg={4}>
          <div
            className="order small-box"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, false, "inprogress")}
          >
            <div style={{ padding: "10px" }}>
              <button style={{ width: "100%", padding: "20px" }}>+</button>
            </div>
            {taskList.map(
              (task) =>
                task.status === "inprogress" && (
                  <div
                    className="card"
                    key={task.id}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <Grid item xs={12} sx={{ padding: "10px" }}>
                      <OutlinedCard
                        title={task.title}
                        description={task.description}
                        url={task.url}
                      />
                    </Grid>
                  </div>
                )
            )}
          </div>
        </Grid>
        <Grid item xs={4} lg={4}>
          <div
            className="order small-box"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, false, "done")}
          >
            <div style={{ padding: "10px" }}>
              <button style={{ width: "100%", padding: "20px" }}>+</button>
            </div>
            {taskList.map(
              (task) =>
                task.status === "done" && (
                  <div
                    className="card"
                    key={task.id}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <Grid item xs={12} sx={{ padding: "10px" }}>
                      <OutlinedCard
                        title={task.title}
                        description={task.description}
                        url={task.url}
                      />
                    </Grid>
                  </div>
                )
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
