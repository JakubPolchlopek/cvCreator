type WorkExperinece = {
    company: string;
    startDate: Date;
    endDate: Date;
    duties: Array<string>
}

type EducationExperience = {
    school: string;
    startDate: Date;
    endDate: Date;
    degree?: string;
}

interface CVData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    workExperience: Array<WorkExperinece>;
    education: Array<EducationExperience>;
    strengths: Array<string>;
    skills: Array<string>;
    lanugaes?: Array<string>
}