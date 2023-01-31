import AWS from "aws-sdk";

// Configure the AWS SDK with the region and credentials
AWS.config.update({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

// Create an S3 client
export const s3 = new AWS.S3();
