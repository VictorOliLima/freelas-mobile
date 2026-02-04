export interface Job {
    id: string;
    title: string;
    description: string;
    price: number;
    isRemote: boolean;
    contractorPhone?: string;
}
