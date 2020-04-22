/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export class Post {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {}
}
