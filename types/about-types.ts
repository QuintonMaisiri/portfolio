export type File = {
  name: string;
  icon: string;
  content?: string;
};
export type Folder = {
  name: string;
  color: string;
  files: File[];
};

export type Category = {
  name: string;
  iconSelected: string;
  iconUnselected: string;
  details: Folder[] | File[];
};

export type AboutMeType = {
  categories: Category[];
};
