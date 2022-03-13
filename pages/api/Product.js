import nextConnect from 'next-connect';
import multiparty from 'multiparty';
import cloudinary from 'cloudinary';
import initDB from '../../Connector/initDB';
import Product from '../../Models/Product';

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
  cloud_name: process.env.Cloudinary_Cloud_Name,
  api_key: process.env.Cloudinary_Aai_Key,
  api_secret: process.env.Cloudinary_Api_Secret,
  secure: true
});

handler.get(async (req, res) => {
  const { By } = req.query;
  let Products = [], Cat, Subcat = [], Alen = 0, Tlen = 0, Clndlen = 0, Blen = 0, Elen = 0, Crslen = 0, Lmlen = 0, Clnglen = 0, Cvrslen = 0, Slen = 0;
  switch (By) {
    case "Path":
      Product.findOne({ Category: req.query.Category }, async function (err, result) {
        if (!err) {
          if (!result) {
            res.send({ message: "Not Found" });
          } else {
            const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
            if (!product) {
              res.send({ message: "Not Found" });
            } else {
              const Check = product.Product.find(item => item.productpath === req.query.Path)
              if (!Check) {
                res.send({ message: "Not Found" });
              } else {
                res.send({ message: "Found", Product: Check, Casu: { Cat: result.Category, Sub: result.Subcategory.find(item => item.name === req.query.SubCategory).name } });
              }
            }
          }
        } else {
          console.log(err)
        }
      });
      break;
    case "Addimg":
      if (req.query.Category !== "All") {
        Product.findOne({ Category: req.query.Category }, async function (err, result) {
          if (!err) {
            if (!result) {
              res.send({ message: "Not Found" });
            } else {
              const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
              if (!product) {
                res.send({ message: "Not Found" });
              } else {
                const Check = product.Product.find(item => item.productpath === req.query.Path)
                if (!Check) {
                  res.send({ message: "Not Found" });
                } else {
                  res.send({ message: "Found", Image_Update_Data: { Cat: req.query.Category, Sub: req.query.SubCategory, Path: req.query.Path } });
                }
              }
            }
          } else {
            console.log(err)
          }
        });
      } else {
        Product.find({}, async function (err, result) {
          result.map((datas) => {
            if (datas.Category !== "All") {
              if (datas.Subcategory.some((item) => item.name === req.query.SubCategory)) {
                if (datas.Subcategory.find((item) => item.name === req.query.SubCategory).Product.some((item) => item.productpath === req.query.Path)) {
                  Product.findOne({ Category: datas.Category }, async function (err, result) {
                    if (!err) {
                      if (!result) {
                        res.send({ message: "Not Found" });
                      } else {
                        const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
                        if (!product) {
                          res.send({ message: "Not Found" });
                        } else {
                          const Check = product.Product.find(item => item.productpath === req.query.Path)
                          if (!Check) {
                            res.send({ message: "Not Found" });
                          } else {
                            res.send({ message: "Found", Image_Update_Data: { Cat: datas.Category, Sub: product.name, Path: Check.productpath } });
                          }
                        }
                      }
                    } else {
                      console.log(err)
                    }
                  });
                }
              }
            }
          });
        });
      }
      break
    case "Updateimg":
      if (req.query.Category !== "All") {
        Product.findOne({ Category: req.query.Category }, async function (err, result) {
          if (!err) {
            if (!result) {
              res.send({ message: "Not Found" });
            } else {
              const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
              if (!product) {
                res.send({ message: "Not Found" });
              } else {
                const Check = product.Product.find(item => item.productpath === req.query.Path)
                if (!Check) {
                  res.send({ message: "Not Found" });
                } else {
                  const Checkurl = Check.image.find(item => item.id === req.query.id)
                  if (!Checkurl) {
                    res.send({ message: "Not Found" });
                  } else {
                    let index = Check.image.findIndex(function (o) {
                      return o.id === req.query.id;
                    });
                    res.send({ message: "Found", Image_Update_Data: { Cat: req.query.Category, Sub: req.query.SubCategory, Path: req.query.Path, Index: index } });
                  }
                }
              }
            }
          } else {
            console.log(err)
          }
        });
      } else {
        Product.find({}, async function (err, result) {
          result.map((datas) => {
            if (datas.Category !== "All") {
              if (datas.Subcategory.some((item) => item.name === req.query.SubCategory)) {
                if (datas.Subcategory.find((item) => item.name === req.query.SubCategory).Product.some((item) => item.productpath === req.query.Path)) {
                  Product.findOne({ Category: datas.Category }, async function (err, result) {
                    if (!err) {
                      if (!result) {
                        res.send({ message: "Not Found" });
                      } else {
                        const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
                        if (!product) {
                          res.send({ message: "Not Found" });
                        } else {
                          const Check = product.Product.find(item => item.productpath === req.query.Path)
                          if (!Check) {
                            res.send({ message: "Not Found" });
                          } else {
                            const Checkurl = Check.image.find(item => item.id === req.query.id)
                            if (!Checkurl) {
                              res.send({ message: "Not Found" });
                            } else {
                              let index = Check.image.findIndex(function (o) {
                                return o.id === req.query.id;
                              });
                              res.send({ message: "Found", Image_Update_Data: { Cat: datas.Category, Sub: product.name, Path: Check.productpath, Index: index } });
                            }
                          }
                        }
                      }
                    } else {
                      console.log(err)
                    }
                  });
                }
              }
            }
          });
        });
      }
      break

    case "Update":
      if (req.query.Category !== "All") {
        Product.findOne({ Category: req.query.Category }, async function (err, result) {
          if (!err) {
            if (!result) {
              res.send({ message: "Not Found" });
            } else {
              const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
              if (!product) {
                res.send({ message: "Not Found" });
              } else {
                const Check = product.Product.find(item => item.productpath === req.query.Path)
                if (!Check) {
                  res.send({ message: "Not Found" });
                } else {
                  res.send({ message: "Found", Product: Check, Casu: { Cat: result.Category, Sub: result.Subcategory.find(item => item.name === req.query.SubCategory).name } });
                }
              }
            }
          } else {
            console.log(err)
          }
        });
      } else {
        Product.find({}, async function (err, result) {
          result.map((datas) => {
            if (datas.Category !== "All") {
              if (datas.Subcategory.some((item) => item.name === req.query.SubCategory)) {
                if (datas.Subcategory.find((item) => item.name === req.query.SubCategory).Product.some((item) => item.productpath === req.query.Path)) {
                  Product.findOne({ Category: req.query.Category }, async function (err, result) {
                    if (!err) {
                      if (!result) {
                        res.send({ message: "Not Found" });
                      } else {
                        const product = result.Subcategory.find(item => item.name === req.query.SubCategory);
                        if (!product) {
                          res.send({ message: "Not Found" });
                        } else {
                          const Check = product.Product.find(item => item.productpath === req.query.Path)
                          if (!Check) {
                            res.send({ message: "Not Found" });
                          } else {
                            res.send({ message: "Found", Product: Check, Casu: { Cat: datas.Category, Sub: result.Subcategory.find(item => item.name === req.query.SubCategory).name } });
                          }
                        }
                      }
                    } else {
                      console.log(err)
                    }
                  });
                }
              }
            }
          });
        });
      }
      break;

    case "Category":
      Product.find({}, function (err, results) {
        if (!err) {
          if (!results) {
            res.send({ message: "Not Found" });
          } else {
            Product.findOne({ Category: req.query.Category }, function (err, result) {
              if (!err) {
                if (!result) {
                  res.send({ message: "Not Found" });
                } else {
                  results.map((datas) => {
                    if (datas.category !== "All") {
                      datas.Subcategory.map((datass) => {
                        if (datas.Category === "Templates") {
                          Tlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Calenders") {
                          Clndlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Books-Guides-And-Planners") {
                          Blen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Email-Marketing-Kits") {
                          Elen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Courses") {
                          Crslen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Lead-Magnets") {
                          Lmlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Challenges") {
                          Clnglen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Covers") {
                          Cvrslen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Super-sale") {
                          Slen += datass.Product.length;
                          Alen += datass.Product.length;
                        }
                      }
                      )
                    }
                  });
                  Cat = [{ name: "All Products", value: "All", length: Alen }, { name: "Templates", value: "Templates", length: Tlen }, { name: "Calenders", value: "Calenders", length: Clndlen }, { name: "Planners", value: "Books-Guides-And-Planners", length: Blen }, { name: "Email Marketing Kits", value: "Email-Marketing-Kits", length: Elen }, { name: "Courses", value: "Courses", length: Crslen }, { name: "Lead Magnets", value: "Lead-Magnets", length: Lmlen }, { name: "Books And Guides", value: "Books-Guides-And-Planners", length: Blen }, { name: "Challenges", value: "Challenges", length: Clnglen }, { name: "Covers", value: "Covers", length: Cvrslen }, { name: "Super Sale", value: "Super-sale", length: Slen }];
                  result.Subcategory.map((Sub) =>
                    Subcat.push({ name: Sub.name, len: Sub.Product.length })
                  )
                  result.Subcategory.map((datas) =>
                    datas.Product.map((data) => {
                      Products.push({ catname: result.Category, subcatname: datas.name, Product: data })
                    }
                    )
                  )
                  res.send({ message: "Found", Product: Products, Countcat: Cat, Countsub: Subcat });
                }
              } else {
                console.log(err)
              }
            });
          }
        } else {
          console.log(err)
        }
      });
      break;

    case "Subcategory":

      Product.find({}, function (err, results) {
        if (!err) {
          if (!results) {
            res.send({ message: "Not Found" });
          } else {
            Product.findOne({ Category: req.query.Category }, function (err, result) {
              if (!err) {
                if (!result) {
                  res.send({ message: "Not Found" });
                } else {
                  results.map((datas) => {
                    if (datas.category !== "All") {
                      datas.Subcategory.map((datass) => {
                        if (datas.Category === "Templates") {
                          Tlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Calenders") {
                          Clndlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Books-Guides-And-Planners") {
                          Blen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Email-Marketing-Kits") {
                          Elen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Courses") {
                          Crslen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Lead-Magnets") {
                          Lmlen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Challenges") {
                          Clnglen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Covers") {
                          Cvrslen += datass.Product.length;
                          Alen += datass.Product.length;
                        } else if (datas.Category === "Super-sale") {
                          Slen += datass.Product.length;
                          Alen += datass.Product.length;
                        }
                      }
                      )
                    }
                  });
                  Cat = [{ name: "All Products", value: "All", length: Alen }, { name: "Templates", value: "Templates", length: Tlen }, { name: "Calenders", value: "Calenders", length: Clndlen }, { name: "Planners", value: "Books-Guides-And-Planners", length: Blen }, { name: "Email Marketing Kits", value: "Email-Marketing-Kits", length: Elen }, { name: "Courses", value: "Courses", length: Crslen }, { name: "Lead Magnets", value: "Lead-Magnets", length: Lmlen }, { name: "Books And Guides", value: "Books-Guides-And-Planners", length: Blen }, { name: "Challenges", value: "Challenges", length: Clnglen }, { name: "Covers", value: "Covers", length: Cvrslen }, { name: "Super Sale", value: "Super-sale", length: Slen }];
                  result.Subcategory.map((Sub) => {
                    Subcat.push({ name: Sub.name, len: Sub.Product.length })
                    if (Sub.name === req.query.SubCategory) {
                      Sub.Product.map((data) => {
                        Products.push({ catname: result.Category, subcatname: Sub.name, Product: data })
                      });
                    }
                  });
                  if (Products.length !== 0) {
                    res.send({ message: "Found", Product: Products, Countcat: Cat, Countsub: Subcat });
                  } else {
                    res.send({ message: "Not Found" });
                  }
                }
              } else {
                console.log(err)
              }
            });
          }
        } else {
          console.log(err)
        }
      });
      break;

    default:
      break;
  }
});

async function Imageupload(req, res) {

  const { tittle, date, productaddername, oprice, cprice, productpath, description } = req.body;
  const image = [];

  if (Object.keys(req.files).length > 4) {
    res.send({ message: "You Can Not Select More Than 4 Images" })
    return
  } else {
    if (Object.keys(req.files).length === 1) {
      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      image.push({ url: result1.secure_url, id: result1.public_id });
    } else if (Object.keys(req.files).length === 2) {
      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      image.push({ url: result1.secure_url, id: result1.public_id })
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      image.push({ url: result2.secure_url, id: result2.public_id })
    } else if (Object.keys(req.files).length === 3) {
      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      image.push({ url: result1.secure_url, id: result1.public_id })
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      image.push({ url: result2.secure_url, id: result2.public_id })
      const result3 = await cloudinary.v2.uploader.upload(req.files.file2[0].path);
      image.push({ url: result3.secure_url, id: result3.public_id })
    } else if (Object.keys(req.files).length === 4) {
      const result1 = await cloudinary.v2.uploader.upload(req.files.file0[0].path);
      image.push({ url: result1.secure_url, id: result1.public_id })
      const result2 = await cloudinary.v2.uploader.upload(req.files.file1[0].path);
      image.push({ url: result2.secure_url, id: result2.public_id })
      const result3 = await cloudinary.v2.uploader.upload(req.files.file2[0].path);
      image.push({ url: result3.secure_url, id: result3.public_id })
      const result4 = await cloudinary.v2.uploader.upload(req.files.file3[0].path);
      image.push({ url: result4.secure_url, id: result4.public_id })
    }
  }
  const data = { tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], image: image }
  return data;
}

handler.post(async (req, res) => {
  switch (req.body.By[0]) {
    case "Onlyimage":
      Product.findOne({ Category: "All" }, async function (err, results) {
        if (!err) {
          const product = results.Subcategory.find(item => item.name === req.body.industry[0]).Product.find(item => item.productpath === req.body.productpath[0]);
          if (product.image.length !== 5) {
            const resultimg = await cloudinary.v2.uploader.upload(req.files.file[0].path);
            product.image.push({ url: resultimg.secure_url, id: resultimg.public_id });
            results.save();
            Product.findOne({ Category: req.body.category[0] }, async function (err, result) {
              if (!err) {
                const product = result.Subcategory.find(item => item.name === req.body.industry[0]).Product.find(item => item.productpath === req.body.productpath[0]);
                product.image.push({ url: resultimg.secure_url, id: resultimg.public_id });
                result.save();
                res.send({ message: "Successfully Added", Red: { path: req.body.productpath[0], cat: req.body.category[0], sub: req.body.industry[0] } });
              } else {
                console.log(err)
              }
            });
          } else {
            res.send({ message: "You Cannot Add More Than 5 Images", Red: { path: req.body.productpath[0], cat: req.body.category[0], sub: req.body.industry[0] } });
          }
        } else {
          console.log(err)
        }
      });
      break;
    case "All":
      const { category, industry, tittle, productpath } = req.body;
      Product.findOne({ Category: "All" }, async function (err, result) {
        if (!err) {
          if (!result) {
            const data = await Imageupload(req, res);
            if (data) {
              await new Product({ Category: "All" }).save();
              await new Product({ Category: category[0] }).save();
              Product.findOne({ Category: "All" }, async function (err, result) {
                if (!err) {
                  result.Subcategory.push({ name: industry[0] });
                  result.save();
                  const newSub = result.Subcategory.find(item => item.name === industry[0]);
                  newSub.Product.push(data);
                  result.save();

                  Product.findOne({ Category: category[0] }, async function (err, result) {
                    if (!err) {
                      result.Subcategory.push({ name: industry[0] });
                      result.save();
                      const newSub = result.Subcategory.find(item => item.name === industry[0]);
                      newSub.Product.push(data);
                      result.save();
                      res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                    } else {
                      console.log(err)
                    }
                  });

                } else {
                  console.log(err)
                }
              });
            }

          } else {

            let Check = false;
            Product.findOne({ Category: "All" }, async function (err, result) {
              if (!err) {
                result.Subcategory.map((ext) => {
                  if ((ext.Product.some(item => item.productpath === productpath[0])) || (ext.Product.some(item => item.tittle === tittle[0]))) {
                    Check = true;
                  }
                });
                if (Check) {
                  res.send({ message: "This Product Is Already Exist In Your Database" });
                } else {

                  const Sub = result.Subcategory.find(item => item.name === industry[0]);
                  if (!Sub) {
                    const data = await Imageupload(req, res);
                    if (data) {
                      result.Subcategory.push({ name: industry[0] });
                      result.save();
                      const newSub = result.Subcategory.find(item => item.name === industry[0]);
                      newSub.Product.push(data);
                      result.save();
                      Product.findOne({ Category: category[0] }, async function (err, result) {
                        if (!err) {
                          if (!result) {
                            await new Product({ Category: category[0] }).save();
                            Product.findOne({ Category: category[0] }, async function (err, result) {
                              if (!err) {
                                result.Subcategory.push({ name: industry[0] });
                                result.save();
                                const newSub = result.Subcategory.find(item => item.name === industry[0]);
                                newSub.Product.push(data);
                                result.save();
                                res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                              } else {
                                console.log(err)
                              }
                            });
                          } else {
                            const Sub = result.Subcategory.find(item => item.name === industry[0]);
                            if (!Sub) {
                              result.Subcategory.push({ name: industry[0] });
                              result.save();
                              const newSub = result.Subcategory.find(item => item.name === industry[0]);
                              newSub.Product.push(data);
                              result.save();
                              res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                            } else {
                              Sub.Product.push(data);
                              result.save();
                            }
                          }
                        } else {
                          console.log(err)
                        }
                      });
                    }
                  } else {
                    const data = await Imageupload(req, res);
                    if (data) {
                      Sub.Product.push(data);
                      result.save();
                      Product.findOne({ Category: category[0] }, async function (err, result) {
                        if (!err) {
                          if (!result) {
                            await new Product({ Category: category[0] }).save();
                            Product.findOne({ Category: category[0] }, async function (err, result) {
                              if (!err) {
                                result.Subcategory.push({ name: industry[0] });
                                result.save();
                                const newSub = result.Subcategory.find(item => item.name === industry[0]);
                                newSub.Product.push(data);
                                result.save();
                                res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                              } else {
                                console.log(err)
                              }
                            });
                          } else {
                            const Sub = result.Subcategory.find(item => item.name === industry[0]);
                            if (!Sub) {
                              result.Subcategory.push({ name: industry[0] });
                              result.save();
                              const newSub = result.Subcategory.find(item => item.name === industry[0]);
                              newSub.Product.push(data);
                              result.save();
                              res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                            } else {
                              Sub.Product.push(data);
                              result.save();
                              res.send({ message: "Successfully Added", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                            }
                          }
                        } else {
                          console.log(err)
                        }
                      });
                    }
                  }
                }
              } else {
                console.log(err)
              }
            });
          }
        } else {
          console.log(err)
        }
      });
      break;

    default:
      break;
  }
});

handler.put(async (req, res) => {

  if (Object.keys(req.files).length !== 0) {
    Product.findOne({ Category: "All" }, async function (err, results) {
      if (!err) {
        const image = results.Subcategory.find(item => item.name === req.body.industry[0]).Product.find(item => item.productpath === req.body.productpath[0]).image[req.body.index[0]];
        await cloudinary.v2.uploader.destroy(image.id);
        const resultimg = await cloudinary.v2.uploader.upload(req.files.file[0].path);
        image.url = resultimg.secure_url;
        image.id = resultimg.public_id;
        results.save();
        Product.findOne({ Category: req.body.category[0] }, async function (err, result) {
          if (!err) {
            const image = result.Subcategory.find(item => item.name === req.body.industry[0]).Product.find(item => item.productpath === req.body.productpath[0]).image[req.body.index[0]];
            image.url = resultimg.secure_url;
            image.id = resultimg.public_id;
            result.save();
            res.send({ message: "Successfully Updated", Red: { path: req.body.productpath[0], cat: req.body.category[0], sub: req.body.industry[0] } });
          } else {
            console.log(err)
          }
        });
      } else {
        console.log(err)
      }
    });
  } else {
    const { category, ocategory, industry, oindustry, tittle, date, productaddername, oprice, cprice, productpath, oproductpath, description, image } = req.body;
    const data = { tittle: tittle[0], date: date[0], productaddername: productaddername[0], oprice: oprice[0], cprice: cprice[0], productpath: productpath[0], description: description[0], image: JSON.parse(image[0]) };
    Product.findOne({ Category: "All" }, async function (err, results) {
      if (!err) {
        const Sub = results.Subcategory.find(item => item.name === industry[0]);
        if (!Sub) {
          results.Subcategory.push({ name: industry[0] });
          results.save();
          const newSub = results.Subcategory.find(item => item.name === industry[0]);
          newSub.Product.push(data);
          const Sub = results.Subcategory.find(item => item.name === oindustry[0]);
          let index = Sub.Product.findIndex(function (o) {
            return o.productpath === oproductpath[0];
          });
          if (index !== -1) Sub.Product.splice(index, 1);
          if (Sub.Product.length === 0) {
            let index = results.Subcategory.findIndex(function (o) {
              return o.name === oindustry[0];
            });
            if (index !== -1) results.Subcategory.splice(index, 1);
          }
          results.save();
        } else {
          const product = results.Subcategory.find(item => item.name === industry[0]).Product.find(item => item.productpath === oproductpath[0]);
          product.tittle = data.tittle;
          product.date = data.date;
          product.productaddername = data.productaddername;
          product.oprice = data.oprice;
          product.cprice = data.cprice;
          product.productpath = data.productpath;
          product.description = data.description;
          results.save();
        }
        Product.findOne({ Category: category[0] }, async function (err, result) {
          if (!err) {
            if (!result) {
              await new Product({ Category: category[0] }).save();
              Product.findOne({ Category: category[0] }, async function (err, resultss) {
                if (!err) {
                  resultss.Subcategory.push({ name: industry[0] });
                  resultss.save();
                  const newSub = resultss.Subcategory.find(item => item.name === industry[0]);
                  newSub.Product.push(data);
                  Product.findOne({ Category: ocategory[0] }, async function (err, results) {
                    if (!err) {
                      const Sub = results.Subcategory.find(item => item.name === oindustry[0]);
                      let index = Sub.Product.findIndex(function (o) {
                        return o.productpath === oproductpath[0];
                      });
                      if (index !== -1) Sub.Product.splice(index, 1);
                      if (Sub.Product.length === 0) {
                        let index = results.Subcategory.findIndex(function (o) {
                          return o.name === oindustry[0];
                        });
                        if (index !== -1) results.Subcategory.splice(index, 1);
                      }
                      if (results.Subcategory.length === 0) {
                        Product.deleteOne({ Category: ocategory[0] }, () => {
                          console.log("Successfully Deleted")
                        });
                      }
                    } else {
                      console.log(err)
                    }
                  });
                  resultss.save();
                  res.send({ message: "Successfully Updated", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
                } else {
                  console.log(err)
                }
              });
            } else {
              const Sub = result.Subcategory.find(item => item.name === industry[0]);
              if (!Sub) {
                result.Subcategory.push({ name: industry[0] });
                result.save();
                const newSub = result.Subcategory.find(item => item.name === industry[0]);
                newSub.Product.push(data);
                const Sub = result.Subcategory.find(item => item.name === oindustry[0]);
                let index = Sub.Product.findIndex(function (o) {
                  return o.productpath === oproductpath[0];
                });
                if (index !== -1) Sub.Product.splice(index, 1);
                if (Sub.Product.length === 0) {
                  let index = result.Subcategory.findIndex(function (o) {
                    return o.name === oindustry[0];
                  });
                  if (index !== -1) result.Subcategory.splice(index, 1);
                }
                result.save();
                res.send({ message: "Successfully Updated", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
              } else {
                let product = Sub.Product.find(item => item.productpath === oproductpath[0]);
                product.tittle = data.tittle;
                product.date = data.date;
                product.productaddername = data.productaddername;
                product.oprice = data.oprice;
                product.cprice = data.cprice;
                product.productpath = data.productpath;
                product.description = data.description;
                await result.save();
                res.send({ message: "Successfully Updated", Red: { path: productpath[0], cat: category[0], sub: industry[0] } });
              }
            }
          } else {
            console.log(err)
          }
        });

      } else {
        console.log(err)
      }
    });
  }
});

handler.delete(async (req, res) => {

  const { Type, productpath, image, category, subcategory } = req.query;
  const deletes = JSON.parse(image);

  switch (Type) {
    case "Only":
      if (category !== "All") {
        Product.findOne({ Category: "All" }, async function (err, results) {
          const Sub = results.Subcategory.find(item => item.name === subcategory);
          const product = results.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
          let indexp = product.image.findIndex(function (o) {
            return o.url === deletes.url;
          });
          if (indexp !== -1) product.image.splice(indexp, 1);
          if (product.image.length === 0) {
            let indexs = Sub.Product.findIndex(function (o) {
              return o.productpath === productpath;
            });
            if (indexs !== -1) Sub.Product.splice(indexs, 1);
          }
          if (Sub.Product.length === 0) {
            let index = results.Subcategory.findIndex(function (o) {
              return o.name === subcategory;
            });
            if (index !== -1) results.Subcategory.splice(index, 1);
          }
          results.save();
          if (results.Subcategory.length === 0) {
            Product.deleteOne({ Category: "All" }, () => {
              console.log("Successfully Deleted Image")
            });
          }
          Product.findOne({ Category: category }, async function (err, result) {
            const Sub = result.Subcategory.find(item => item.name === subcategory);
            const product = result.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
            let indexp = product.image.findIndex(function (o) {
              return o.url === deletes.url;
            });
            if (indexp !== -1) product.image.splice(indexp, 1);
            if (product.image.length === 0) {
              let indexs = Sub.Product.findIndex(function (o) {
                return o.productpath === productpath;
              });
              if (indexs !== -1) Sub.Product.splice(indexs, 1);
            }
            if (Sub.Product.length === 0) {
              let index = result.Subcategory.findIndex(function (o) {
                return o.name === subcategory;
              });
              if (index !== -1) result.Subcategory.splice(index, 1);
            }
            result.save();
            if (result.Subcategory.length === 0) {
              Product.deleteOne({ Category: category }, () => {
                console.log("Successfully Deleted Image")
                res.send({ message: "Successfully Deleted" });
              });
            } else {
              res.send({ message: "Successfully Deleted Image" });
            }
            await cloudinary.v2.uploader.destroy(deletes.id);
          });
        });
      } else {
        Product.find({}, async function (err, resultss) {
          resultss.map((datas) => {
            if (datas.Category !== "All") {
              const Subs = datas.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
              if (Subs) {
                Product.findOne({ Category: "All" }, async function (err, results) {
                  const Sub = results.Subcategory.find(item => item.name === subcategory);
                  const product = results.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
                  let indexp = product.image.findIndex(function (o) {
                    return o.url === deletes.url;
                  });
                  if (indexp !== -1) product.image.splice(indexp, 1);
                  if (product.image.length === 0) {
                    let indexs = Sub.Product.findIndex(function (o) {
                      return o.productpath === productpath;
                    });
                    if (indexs !== -1) Sub.Product.splice(indexs, 1);
                  }
                  if (Sub.Product.length === 0) {
                    let index = results.Subcategory.findIndex(function (o) {
                      return o.name === subcategory;
                    });
                    if (index !== -1) results.Subcategory.splice(index, 1);
                  }
                  results.save();
                  if (results.Subcategory.length === 0) {
                    Product.deleteOne({ Category: "All" }, () => {
                      console.log("Successfully Deleted Image")
                    });
                  }
                  Product.findOne({ Category: datas.Category }, async function (err, result) {
                    const Sub = result.Subcategory.find(item => item.name === subcategory);
                    const product = result.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
                    let indexp = product.image.findIndex(function (o) {
                      return o.url === deletes.url;
                    });
                    if (indexp !== -1) product.image.splice(indexp, 1);
                    if (product.image.length === 0) {
                      let indexs = Sub.Product.findIndex(function (o) {
                        return o.productpath === productpath;
                      });
                      if (indexs !== -1) Sub.Product.splice(indexs, 1);
                    }
                    if (Sub.Product.length === 0) {
                      let index = result.Subcategory.findIndex(function (o) {
                        return o.name === subcategory;
                      });
                      if (index !== -1) result.Subcategory.splice(index, 1);
                    }
                    result.save();
                    if (result.Subcategory.length === 0) {
                      Product.deleteOne({ Category: datas.Category }, () => {
                        console.log("Successfully Deleted Image")
                        res.send({ message: "Successfully Deleted" });
                      });
                    } else {
                      res.send({ message: "Successfully Deleted Image" });
                    }
                    await cloudinary.v2.uploader.destroy(deletes.id);
                  });
                });
              }
            }
          });
        });
      }
      break;

    case "All":
      if (category !== "All") {
        Product.findOne({ Category: "All" }, async function (err, results) {
          const Sub = results.Subcategory.find(item => item.name === subcategory);
          let indexp = Sub.Product.findIndex(function (o) {
            return o.productpath === productpath;
          });
          if (indexp !== -1) Sub.Product.splice(indexp, 1);
          if (Sub.Product.length === 0) {
            let indexs = results.Subcategory.findIndex(function (o) {
              return o.name === subcategory;
            });
            if (indexs !== -1) results.Subcategory.splice(indexs, 1);
          }
          results.save();
          if (results.Subcategory.length === 0) {
            Product.deleteOne({ Category: "All" }, () => {
              console.log("Successfully Deleted")
            });
          }
          Product.findOne({ Category: category }, async function (err, result) {
            const Sub = result.Subcategory.find(item => item.name === subcategory);
            let index = Sub.Product.findIndex(function (o) {
              return o.productpath === productpath;
            });
            if (index !== -1) Sub.Product.splice(index, 1);
            if (Sub.Product.length === 0) {
              let index = result.Subcategory.findIndex(function (o) {
                return o.name === subcategory;
              });
              if (index !== -1) result.Subcategory.splice(index, 1);
            }
            result.save();
            if (result.Subcategory.length === 0) {
              Product.deleteOne({ Category: category }, () => {
                console.log("Successfully Deleted")
              });
            }
            res.send({ message: "Successfully Deleted" });
            for (let i = 0; i < deletes.length; i++) {
              await cloudinary.v2.uploader.destroy(deletes[i].id);
            }
          });
        });
      } else {
        Product.find({}, async function (err, resultss) {
          resultss.map((datas) => {
            if (datas.Category !== "All") {
              const Subs = datas.Subcategory.find(item => item.name === subcategory).Product.find(item => item.productpath === productpath);
              if (Subs) {
                Product.findOne({ Category: "All" }, async function (err, results) {
                  const Sub = results.Subcategory.find(item => item.name === subcategory);
                  let indexp = Sub.Product.findIndex(function (o) {
                    return o.productpath === productpath;
                  });
                  if (indexp !== -1) Sub.Product.splice(indexp, 1);
                  if (Sub.Product.length === 0) {
                    let indexs = results.Subcategory.findIndex(function (o) {
                      return o.name === subcategory;
                    });
                    if (indexs !== -1) results.Subcategory.splice(indexs, 1);
                  }
                  results.save();
                  if (results.Subcategory.length === 0) {
                    Product.deleteOne({ Category: "All" }, () => {
                      console.log("Successfully Deleted")
                    });
                  }
                  Product.findOne({ Category: datas.Category }, async function (err, result) {
                    const Sub = result.Subcategory.find(item => item.name === subcategory);
                    let index = Sub.Product.findIndex(function (o) {
                      return o.productpath === productpath;
                    });
                    if (index !== -1) Sub.Product.splice(index, 1);
                    if (Sub.Product.length === 0) {
                      let index = result.Subcategory.findIndex(function (o) {
                        return o.name === subcategory;
                      });
                      if (index !== -1) result.Subcategory.splice(index, 1);
                    }
                    result.save();
                    if (result.Subcategory.length === 0) {
                      Product.deleteOne({ Category: datas.Category }, () => {
                        console.log("Successfully Deleted")
                      });
                    }
                    res.send({ message: "Successfully Deleted" });
                    for (let i = 0; i < deletes.length; i++) {
                      await cloudinary.v2.uploader.destroy(deletes[i].id);
                    }
                  });
                });
              }
            }
          });
        });
      }
      break;

    default:
      break;
  }


});




export default handler;