import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import app from './app';
// import { AppDataSource } from './data-source';

// const PORT = process.env.PORT || 3000;
// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err);
//   });

// import app from "./app";
// import { AppDataSource } from "./data-source";

// const PORT = process.env.PORT || 3000;

// AppDataSource.initialize()
//   .then(() => {
//     console.log("📦 Data Source has been initialized!");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Error during Data Source initialization:", err);
//   });
