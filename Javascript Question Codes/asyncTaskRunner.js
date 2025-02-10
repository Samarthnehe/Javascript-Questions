// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: UBER, MYNTRA

class TaskRunner {
  constructor(concurrency = 1) {
    this.concurrency = concurrency; // max concurrent tasks
    this.queue = []; // keep track of tasks that are to be run
    this.runningTasks = 0; // track of how many are running currently
  }

  async push(task) {
    // if number of running task is less than concurrency capacity, execute the task
    if (this.runningTasks < this.concurrency) {
      await this.execute(task);
    } else {
      // else append in the queue to execute later
      this.queue.push(task);
    }
  }

  async execute(task) {
    // increase number of running task as it has started executing
    this.runningTasks += 1;
    try {
      //run the task
      await task();
    } finally {
      //after its done reduce the running task count
      this.runningTasks -= 1;
      // if any task is available in the queue and running tasks are less than concurrency limit, remove the first added task and execute it.
      if (this.queue.length && this.runningTasks < this.concurrency) {
        const newTask = this.queue.shift();
        this.execute(newTask);
      }
    }
  }
}
