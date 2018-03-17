import { IArticle } from '../../interfaces/IArticle';

export namespace Mock {

    export class MockData<T> {
        public static getList(): any[] {
            return Articles;
        }
    }

    export const Articles: IArticle[] = [
        {
            Id: 1,
            Title: 'Havoc with pirates arrival',
            Author: 'PiratesSpecialist',
            FeaturedImage: '',
            PublishingDate: new Date(),
            Snippet: 'The goddamn pirates are here',
            Text: `On the eastern coast of the unknown and mysterious, there appeared 3 ships out of nowhere. Suddenly surprising
             everyone with their husky voice "Aye aye captain"`
        }, {
            Id: 2,
            Title: 'Pirates came from nowhere',
            Author: 'cely cirus',
            FeaturedImage: '',
            PublishingDate: new Date(),
            Snippet: 'Snippet',
            Text: 'This is the text yo'
        }, {
            Id: 2,
            Title: 'Pirates came from nowhere',
            Author: 'cely cirus',
            FeaturedImage: '',
            PublishingDate: new Date(),
            Snippet: 'Snippet',
            Text: 'This is the text yo'
        }, {
            Id: 2,
            Title: 'Pirates came from nowhere',
            Author: 'cely cirus',
            FeaturedImage: '',
            PublishingDate: new Date(),
            Snippet: 'Snippet',
            Text: 'This is the text yo'
        },
    ];
}
