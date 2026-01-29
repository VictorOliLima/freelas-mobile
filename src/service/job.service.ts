import { Job } from '@/src/types/Job';

const jobs: Job[] = [
    {
        id: '1',
        title: 'Designer UI',
        description: 'Criar layout para app mobile.',
        price: 500,
        isRemote: true,
        contractorPhone: '43999999999',
    },
    {
        id: '2',
        title: 'Dev React',
        description: 'Desenvolvimento de app em React Native.',
        price: 800,
        isRemote: true,
    },
];

class JobService {
    findAll(): Promise<Job[]> {
        return Promise.resolve(jobs);
    }

    findById(id: string): Promise<Job | undefined> {
        return Promise.resolve(jobs.find(job => job.id === id));
    }
}

export const jobService = new JobService();
