import S3 from "aws-s3";

const config = {
  bucketName: process.env.S3_BUCKET,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export default function handler(req, res) {
  // only accept post requests
  if (req.method !== "POST") {
    return res.status(405).end();
  } else {
    // console.log(req.body);
    console.log(req.files[0]);
    if (!req.files || !req.files[0]) {
      return res.status(400).end();
    } else {
      // get file
      const file = req.files[0];
      // get file name
      const fileName = file.originalname;
      // get file type
      const fileType = file.mimetype;
      // get file size
      const fileSize = file.size;
      // get file data
      const fileData = file;

      console.log(fileName);
    }

    // const S3Client = new S3({...config, dirName: division.dirName});
    // S3Client.uploadFile(data.file[0])
    //   .then(data => {
    //     console.log(data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   }
    // )
    return res.status(200).end();
  }
}
