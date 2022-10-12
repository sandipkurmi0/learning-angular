interface Works {
  title: string;
  remaningTask: number;
}

export interface Employee {
  id: number;
  name: string;
  online: boolean;
  holidya?: number | null;
  works?: Works[] | null;
}
