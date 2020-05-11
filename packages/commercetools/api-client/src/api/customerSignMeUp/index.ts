import { CustomerSignMeUpDraft } from './../../types/GraphQL';
import { apolloClient, locale } from './../../index';
import CustomerSignMeUpMutation from './defaultMutation';
import { SignInResponse } from './../../types/Api';

const customerSignMeUp = async (draft: CustomerSignMeUpDraft): Promise<SignInResponse> => {
  return await apolloClient.mutate({
    mutation: CustomerSignMeUpMutation,
    variables: { draft, locale },
    fetchPolicy: 'no-cache'
  }) as SignInResponse;
};

export default customerSignMeUp;
