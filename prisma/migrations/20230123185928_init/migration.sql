-- CreateTable
CREATE TABLE "Patient" (
    "uid" SERIAL NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "PatientBasicInfo" (
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Healthy',
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PatientADR" (
    "bronchitis" BOOLEAN NOT NULL DEFAULT false,
    "diarrhea" BOOLEAN NOT NULL DEFAULT false,
    "pharyngitis" BOOLEAN NOT NULL DEFAULT false,
    "pruritus" BOOLEAN NOT NULL DEFAULT false,
    "rash" BOOLEAN NOT NULL DEFAULT false,
    "rhinitis" BOOLEAN NOT NULL DEFAULT false,
    "urticaria" BOOLEAN NOT NULL DEFAULT false,
    "patientId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PatientBloodPressure" (
    "id" SERIAL NOT NULL,
    "systolic" INTEGER NOT NULL,
    "diastolic" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "PatientBloodPressure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientTemperature" (
    "id" SERIAL NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "PatientTemperature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientAntibody" (
    "id" SERIAL NOT NULL,
    "igg" DOUBLE PRECISION NOT NULL,
    "igm" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "PatientAntibody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientAllergy" (
    "id" SERIAL NOT NULL,
    "allergy" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "PatientAllergy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientBasicInfo_email_key" ON "PatientBasicInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PatientBasicInfo_patientId_key" ON "PatientBasicInfo"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "PatientADR_patientId_key" ON "PatientADR"("patientId");

-- AddForeignKey
ALTER TABLE "PatientBasicInfo" ADD CONSTRAINT "PatientBasicInfo_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientADR" ADD CONSTRAINT "PatientADR_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientBloodPressure" ADD CONSTRAINT "PatientBloodPressure_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientTemperature" ADD CONSTRAINT "PatientTemperature_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientAntibody" ADD CONSTRAINT "PatientAntibody_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientAllergy" ADD CONSTRAINT "PatientAllergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
