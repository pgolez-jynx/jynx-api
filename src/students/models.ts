export type Student = {
  id: string;
  studentId: string;
  givenName: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
  gender: 'M' | 'F' | 'O';
  dateOfBirth: Date;
  nationality: string;
  address?: string;
};
