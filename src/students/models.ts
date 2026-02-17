export type Student = {
  id: string;
  studentId: string;
  givenName: string;
  middleName: string | null;
  familyName: string;
  suffix: string | null;
  gender: 'M' | 'F' | 'O';
  dateOfBirth: Date;
  nationality: string;
  address: string | null;
};
