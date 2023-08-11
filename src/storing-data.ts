import mongoose from 'mongoose';
import { database } from 'src/database.config';

export class StoringData {
    req: any;
    res: any;
  
    async connect() {
      if (database.type == 'mongo') {
        try {
          await mongoose.connect(database.connection);
        } catch (error) {
          console.log('error', error)
        }
      }
    }
  
    accessingData(req , res) {
      this.req = req;
      this.res = res
  
      this.connect()
      this.createLogTable()
      this.createRegister()
    }
  
    createLogTable() {
      // Define the Log model
      const LogSchema = new mongoose.Schema({
        content: Object,
        created_at: Date,
      });
  
      // Create the Log model
      mongoose.model('Log', LogSchema);
    }
  
    async createRegister() {
      console.log(this.req)
      // const Log = mongoose.model('Log');
  
      // const log = new Log({
      //   content: { baseUrl: this.req.get('host') },
      //   timestamp: new Date(),
      // });
  
      // await log.save();
  
    }
}