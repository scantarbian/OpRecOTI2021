// DOES NOT WORK, WILL USE LAMDA FUNCTIONS AS
// A MORE SECURE WORKAROUND
// REPO: https://github.com/scantarbian/lambda-s3-getSignedURL

import S3 from "react-aws-s3";

const config = {
  bucketName: process.env.S3_BUCKET,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export default function handler(req, res) {
  // only accept post requests
  if (req.method !== "POST") {
    return res.status(405).end({ error: "Method not allowed" });
  } else {
    if (!req.files || !req.files[0]) {
      return res.status(400).end({ error: "File not found!"});
    } else {
      const data = req.body;
      const file = req.files[0];

      const S3Client = new S3({...config, dirName: data.divison});
      S3Client.uploadFile(file)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        }
      )
    }

    return res.status(200).end();
  }
}
