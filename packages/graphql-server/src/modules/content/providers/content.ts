import { Injectable } from '@graphql-modules/di';
import { Content } from '../../../_generated-types';
import { ApolloClientContext } from '../../common';

@Injectable()
export class ContentProvider {
    constructor() {}

    public async getContentPage(
        id: string,
        { res, accesToken }: ApolloClientContext,
    ): Promise<Content> {
        // FAKE THIS IS REGISTRATION OF USER
        console.log(`WE HAVE A SERVICE TOKEN ${accesToken}`);

        // AWAIT USER

        // SET COOKIE
        res.cookie('id', 'bar', {
            httpOnly: true,
            // @ts-ignore find out later
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        // MOCK A SIMPLE CONTENT PAGE
        return {
            meta: {
                title: 'title',
                canonical: 'https://maapteh',
                description: 'foo bar',
            },
            components: [
                {
                    id: 'r1_01',
                    type: 'Article',
                    // @ts-ignore
                    title: 'Shizzle',
                    body: 'My article overhere',
                },
            ],
        };
    }
}
