export class TimerTask {
    executeTaskAfterDelay(task: () => void, delay: number): void {
      console.log(`Task will be executed after ${delay} milliseconds`);
      setTimeout(() => {
        task();
        console.log('Task executed');
      }, delay);
    }
  }