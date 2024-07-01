import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

// Default Data
const DefaultData = async () => {
  try {
    for (let product of products) {
      await Product.updateOne(
        { id: product.id },
        { $set: product },
        { upsert: true } // insert doc if it doesnot exist
      );
    }
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

export default DefaultData;
