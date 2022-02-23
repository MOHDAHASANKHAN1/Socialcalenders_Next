import nextConnect from 'next-connect';
import multiparty from 'multiparty';
import cloudinary from 'cloudinary';
import initDB from '../../Connector/initDB';
import Product from '../../Models/Product';
import Productwithcat from '../../Models/Productwithcat';

initDB();

const middleware = nextConnect();
const handler = nextConnect();
handler.use(middleware);

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form()

  await form.parse(req, function (err, fields, files) {
    req.body = fields
    req.files = files
    next()
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

cloudinary.config({
  cloud_name: 'technicalknowledges',
  api_key: '458992828633173',
  api_secret: 'wFtu-vpbkdCDhuOtH6S9dXcBTiE',
  secure: true
});

handler.get(async (req, res) => {
  const { By } = req.query;
  switch (By) {

    case "Path":
      const product = await Product.findOne({ productpath: req.query.Path });
      res.send({ Product: product });
      break;

    case "Category":
      const Categorys = await Product.find({ category: req.query.Category });
      res.send({ Category: Categorys });
      break;

    case "Subcategory":
      const Subcategorys = await Product.find({
        $and: [
          { category: req.query.Category },
          { industry: req.query.SubCategory }
        ]
      });
      res.send({ Subcategory: Subcategorys });
      break;

    default:
      break;
  }
});

handler.post(async (req, res) => {

  // console.log(req.body.category[0])
  // console.log(req.body.industry[0])

  // Productwithcat.findOne({ name: req.body.category[0] }, async function (err, result) {
  //   if (!err) {
  //     if (!result) {
  //       await new Productwithcat({ name: req.body.category[0] }).save();
  //       Productwithcat.findOne({ name: req.body.category[0] }, function (err, result) {
  //         if (!err) {
  //           result.subcategory.push({ name: req.body.industry[0] })
  //           result.markModified('subcategory');
  //           result.save();
  //         } else {
  //           console.log(err);
  //         }
  //       });

  //     }
  //     else {
  //       Productwithcat.findOne({ "subcategory.name": req.body.industry[0] }, function (err, result) {
  //         if (!result) {
  //           result.subcategory.push({
  //             name: req.body.industry[0]
  //           })
  //           result.markModified('subcategory');
  //           result.save();
  //         } else {

  //         }
  //       })
  //     }
  //   } else {
  //     console.log(err);
  //   }
  // });

  const imageurl = [];
  const imageid = [];
  const { category, industry, tittle, date, productaddername, oprice, cprice, productpath, description } = req.body;

  if (Object.keys(req.files).length > 4) {
    res.send("You Can Not Select More Than 4 Images")
  } else {
    const Category = [];
    Category.push("All");
    Category.push(category[0]);

    if (Object.keys(req.files).length == 1) {

      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      imageurl.push(result1.secure_url);
      imageid.push(result1.public_id);
      const data = { category: Category, industry: industry[0], tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], imageurl: imageurl, imageid: imageid }
      await new Product(data).save();
      const product = await Product.findOne({ productpath: productpath });
      res.send({ message: "Successfully Added", productpath: product.productpath });

    } else if (Object.keys(req.files).length == 2) {

      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      imageurl.push(result1.secure_url)
      imageid.push(result1.public_id)
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      imageurl.push(result2.secure_url)
      imageid.push(result2.public_id)
      const data = { category: Category, industry: industry[0], tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], imageurl: imageurl, imageid: imageid }
      await new Product(data).save();
      const product = await Product.findOne({ productpath: productpath });
      res.send({ message: "Successfully Added", productpath: product.productpath });

    } else if (Object.keys(req.files).length == 3) {

      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      imageurl.push(result1.secure_url)
      imageid.push(result1.public_id)
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      imageurl.push(result2.secure_url)
      imageid.push(result2.public_id)
      const result3 = await cloudinary.v2.uploader.upload(req.files.file2[0].path);
      imageurl.push(result3.secure_url)
      imageid.push(result3.public_id)
      const data = { category: Category, industry: industry[0], tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], imageurl: imageurl, imageid: imageid }
      await new Product(data).save();
      const product = await Product.findOne({ productpath: productpath });
      res.send({ message: "Successfully Added", productpath: product.productpath });

    } else if (Object.keys(req.files).length == 4) {

      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      imageurl.push(result1.secure_url)
      imageid.push(result1.public_id)
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      imageurl.push(result2.secure_url)
      imageid.push(result2.public_id)
      const result3 = await cloudinary.v2.uploader.upload(req.files.file2[0].path);
      imageurl.push(result3.secure_url)
      imageid.push(result3.public_id)
      const result4 = await cloudinary.v2.uploader.upload(req.files.file3[0].path);
      imageurl.push(result4.secure_url)
      imageid.push(result4.public_id)
      const data = { category: Category, industry: industry[0], tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], imageurl: imageurl, imageid: imageid }
      await new Product(data).save();
      const product = await Product.findOne({ productpath: productpath });
      res.send({ message: "Successfully Added", productpath: product.productpath });

    }

  }

});

handler.put(async (req, res) => {

  const { id, category, industry, tittle, date, productaddername, oprice, cprice, productpath, description, imageurl, imageid } = req.body;

  if (Object.keys(req.files).length !== 0) {

  } else {
    const Category = [];
    Category.push("All");
    Category.push(category[0]);
    const data = { category: Category, industry: industry[0], tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], imageurl: JSON.parse(imageurl), imageid: JSON.parse(imageid) }
    Product.updateOne({ _id: id }, { $set: data }, () => {
      res.send({ message: "Successfully Updated", productpath: productpath });
    });

  }

});

handler.delete(async (req, res) => {

  const deletes = JSON.parse(req.query.imageid);

  Product.deleteOne({ _id: req.query.id }, () => {
    res.send({ message: "Successfully Deleted" });
  });

  for (let i = 0; i < deletes.length; i++) {
    await cloudinary.v2.uploader.destroy(deletes[i]);
  }

});




export default handler;