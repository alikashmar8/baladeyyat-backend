import * as path from 'path';

export default () => ({
  domain: process.env.DOMAIN,
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: parseInt(process.env.TYPEORM_PORT) || 5432,
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [path.join(__dirname, '../entities/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    cli: {
      migrationsDir: 'src/migrations',
      entitiesDir: 'src/entities',
    },
  },
  mail: {
    from: process.env.MAIL_FROM,
    transport: process.env.MAIL_TRANSPORT,
  },
  multer: {
    uploadsPath: process.env.UPLOADS_PATH,
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3BucketName: process.env.AWS_S3_BUCKET_NAME,
    dynamoDBChatTable: process.env.AWS_DYNAMODB_CHAT_TABLE,
    eventBridgeSource: process.env.AWS_EVENT_BRIDGE_SOURCE,
    lambdaPaymentScheduleId: process.env.AWS_LAMBDA_PAYMENT_SCHEDULE_ID,
    lambdaPaymentScheduleARN: process.env.AWS_LAMBDA_PAYMENT_SCHEDULE_ARN,
  },
  facebook: {
    appId: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    clientId2: process.env.GOOGLE_CLIENT_ID2,
    clientSecret2: process.env.GOOGLE_CLIENT_SECRET2,
  },
  apple: {
    clientId: process.env.APPLE_CLIENT_ID,
    keyId: process.env.APPLE_KEY_ID,
    teamId: process.env.APPLE_TEAM_ID,
    privateKeyLocation: process.env.APPLE_PRIVATE_KEY_LOCATION,
  },
  pages: {
    about: process.env.PAGES_ABOUT_SOURCE,
    termsAndConditions: process.env.PAGES_TERMS_AND_CONDITIONS_SOURCE,
    faq: process.env.PAGES_FAQ_SOURCE,
    groupAgreement: process.env.PAGES_GROUP_AGREEMENT,
    missionAndVisionStatements: process.env.PAGES_MISSION_AND_VISION_STATEMENTS,
  },
  sila: {
    handle: process.env.SILA_MONEY_HANDLE,
    privateKey: process.env.SILA_MONEY_PRIVATE_KEY,
  },
  settings: {
    supportPublicGroups: process.env.SETTINGS_SUPPORT_PUBLIC_GROUPS,
  },
  mycroshare: {
    documentValidationHost: process.env.MYCROSHARE_DOCUMENT_VALIDATION_HOST,
    documentValidationPath: process.env.MYCROSHARE_DOCUMENT_VALIDATION_PATH,
  },
  winston: {
    logDirName: process.env.WINSTON_LOG_DIR_NAME,
  },
});
