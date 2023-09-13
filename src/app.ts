import express from 'express';
import userRoutes from './routes/userRoutes';

class App {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3001; 
    
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/', userRoutes);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const app = new App();
app.start();