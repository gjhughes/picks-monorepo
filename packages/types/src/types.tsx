import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export type Auth = {
   __typename?: 'Auth',
  accessToken: Scalars['String'],
  user: User,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Leaderboard = {
   __typename?: 'Leaderboard',
  weeks?: Maybe<Array<Maybe<Week>>>,
  overall?: Maybe<Array<Maybe<UserScore>>>,
};

export type League = {
   __typename?: 'League',
  uuid: Scalars['String'],
  name: Scalars['String'],
  accessCode: Scalars['String'],
  members: Array<User>,
  predictions: Array<Maybe<Prediction>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login: Auth,
  register: Auth,
  createLeague: League,
  joinLeague: League,
  upsertPrediction?: Maybe<Array<Maybe<Prediction>>>,
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationRegisterArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  passwordConfirmation: Scalars['String']
};


export type MutationCreateLeagueArgs = {
  name: Scalars['String']
};


export type MutationJoinLeagueArgs = {
  leagueId: Scalars['String']
};


export type MutationUpsertPredictionArgs = {
  leagueId: Scalars['String'],
  week: Scalars['Int'],
  gameKey: Scalars['String'],
  predictedWinner: Scalars['Int'],
  stage: Scalars['String'],
  season: Scalars['String']
};

export type Prediction = {
   __typename?: 'Prediction',
  leagueId: Scalars['String'],
  gameKey: Scalars['String'],
  week: Scalars['Int'],
  predictedWinner: Scalars['Int'],
  createdBy: Scalars['String'],
  stage: Scalars['String'],
  season: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  accessLeague?: Maybe<League>,
  leaderboard?: Maybe<Leaderboard>,
  league?: Maybe<League>,
  leagueId?: Maybe<Scalars['String']>,
  leagues: Array<Maybe<League>>,
  loggedInUser?: Maybe<Scalars['String']>,
  predictionsForWeek?: Maybe<Array<Maybe<Prediction>>>,
  teamStandings?: Maybe<Array<Maybe<TeamRecord>>>,
  user?: Maybe<User>,
  weeklySchedule?: Maybe<Array<Maybe<WeeklySchedule>>>,
};


export type QueryAccessLeagueArgs = {
  accessCode: Scalars['String']
};


export type QueryLeaderboardArgs = {
  leagueId: Scalars['String']
};


export type QueryLeagueArgs = {
  uuid: Scalars['String']
};


export type QueryPredictionsForWeekArgs = {
  leagueId: Scalars['String'],
  week: Scalars['Int'],
  stage: Scalars['String'],
  season: Scalars['String']
};


export type QueryTeamStandingsArgs = {
  season: Scalars['String']
};


export type QueryUserArgs = {
  uuid: Scalars['String']
};


export type QueryWeeklyScheduleArgs = {
  season: Scalars['String'],
  week: Scalars['String']
};

export type TeamRecord = {
   __typename?: 'TeamRecord',
  season?: Maybe<Scalars['Int']>,
  team?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  wins?: Maybe<Scalars['Int']>,
  losses?: Maybe<Scalars['Int']>,
  ties?: Maybe<Scalars['Int']>,
  teamId?: Maybe<Scalars['Int']>,
};


export type User = {
   __typename?: 'User',
  uuid: Scalars['String'],
  leagues: Array<Maybe<League>>,
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type UserScore = {
   __typename?: 'UserScore',
  user?: Maybe<User>,
  score?: Maybe<Scalars['Int']>,
};

export type Week = {
   __typename?: 'Week',
  week?: Maybe<Scalars['Int']>,
  results?: Maybe<Array<Maybe<UserScore>>>,
};

export type WeeklySchedule = {
   __typename?: 'WeeklySchedule',
  status?: Maybe<Scalars['String']>,
  gameKey?: Maybe<Scalars['String']>,
  awayTeam?: Maybe<Scalars['String']>,
  homeTeam?: Maybe<Scalars['String']>,
  awayScore?: Maybe<Scalars['Int']>,
  homeScore?: Maybe<Scalars['Int']>,
  awayTeamId?: Maybe<Scalars['Int']>,
  homeTeamId?: Maybe<Scalars['Int']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (obj: any, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  League: ResolverTypeWrapper<League>,
  User: ResolverTypeWrapper<User>,
  Prediction: ResolverTypeWrapper<Prediction>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Leaderboard: ResolverTypeWrapper<Leaderboard>,
  Week: ResolverTypeWrapper<Week>,
  UserScore: ResolverTypeWrapper<UserScore>,
  TeamRecord: ResolverTypeWrapper<TeamRecord>,
  WeeklySchedule: ResolverTypeWrapper<WeeklySchedule>,
  Mutation: ResolverTypeWrapper<{}>,
  Auth: ResolverTypeWrapper<Auth>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  League: League,
  User: User,
  Prediction: Prediction,
  Int: Scalars['Int'],
  Leaderboard: Leaderboard,
  Week: Week,
  UserScore: UserScore,
  TeamRecord: TeamRecord,
  WeeklySchedule: WeeklySchedule,
  Mutation: {},
  Auth: Auth,
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LeaderboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaderboard'] = ResolversParentTypes['Leaderboard']> = {
  weeks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Week']>>>, ParentType, ContextType>,
  overall?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScore']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type LeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['League'] = ResolversParentTypes['League']> = {
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  accessCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  predictions?: Resolver<Array<Maybe<ResolversTypes['Prediction']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
  register?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'name' | 'email' | 'password' | 'passwordConfirmation'>>,
  createLeague?: Resolver<ResolversTypes['League'], ParentType, ContextType, RequireFields<MutationCreateLeagueArgs, 'name'>>,
  joinLeague?: Resolver<ResolversTypes['League'], ParentType, ContextType, RequireFields<MutationJoinLeagueArgs, 'leagueId'>>,
  upsertPrediction?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prediction']>>>, ParentType, ContextType, RequireFields<MutationUpsertPredictionArgs, 'leagueId' | 'week' | 'gameKey' | 'predictedWinner' | 'stage' | 'season'>>,
};

export type PredictionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prediction'] = ResolversParentTypes['Prediction']> = {
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  gameKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  predictedWinner?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  season?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  accessLeague?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType, RequireFields<QueryAccessLeagueArgs, 'accessCode'>>,
  leaderboard?: Resolver<Maybe<ResolversTypes['Leaderboard']>, ParentType, ContextType, RequireFields<QueryLeaderboardArgs, 'leagueId'>>,
  league?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType, RequireFields<QueryLeagueArgs, 'uuid'>>,
  leagueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  leagues?: Resolver<Array<Maybe<ResolversTypes['League']>>, ParentType, ContextType>,
  loggedInUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  predictionsForWeek?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prediction']>>>, ParentType, ContextType, RequireFields<QueryPredictionsForWeekArgs, 'leagueId' | 'week' | 'stage' | 'season'>>,
  teamStandings?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamRecord']>>>, ParentType, ContextType, RequireFields<QueryTeamStandingsArgs, 'season'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'uuid'>>,
  weeklySchedule?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklySchedule']>>>, ParentType, ContextType, RequireFields<QueryWeeklyScheduleArgs, 'season' | 'week'>>,
};

export type TeamRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamRecord'] = ResolversParentTypes['TeamRecord']> = {
  season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ties?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  leagues?: Resolver<Array<Maybe<ResolversTypes['League']>>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type UserScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserScore'] = ResolversParentTypes['UserScore']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type WeekResolvers<ContextType = any, ParentType extends ResolversParentTypes['Week'] = ResolversParentTypes['Week']> = {
  week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScore']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type WeeklyScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklySchedule'] = ResolversParentTypes['WeeklySchedule']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gameKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  awayTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  homeTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  awayScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  homeScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  awayTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  homeTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Resolvers<ContextType = any> = {
  Auth?: AuthResolvers<ContextType>,
  Leaderboard?: LeaderboardResolvers<ContextType>,
  League?: LeagueResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Prediction?: PredictionResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  TeamRecord?: TeamRecordResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UserScore?: UserScoreResolvers<ContextType>,
  Week?: WeekResolvers<ContextType>,
  WeeklySchedule?: WeeklyScheduleResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  client?: ClientDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const RecordFragmentDoc = gql`
    fragment record on TeamRecord {
  teamId
  wins
  losses
  ties
  name
  team
}
    `;
export const UserScoreFragmentDoc = gql`
    fragment userScore on UserScore {
  user {
    uuid
    name
  }
  score
}
    `;
export const CreateLeagueDocument = gql`
    mutation CreateLeague($name: String!) {
  createLeague(name: $name) {
    uuid
    accessCode
    name
  }
}
    `;
export type CreateLeagueMutationFn = ApolloReactCommon.MutationFunction<CreateLeagueMutation, CreateLeagueMutationVariables>;

/**
 * __useCreateLeagueMutation__
 *
 * To run a mutation, you first call `useCreateLeagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeagueMutation, { data, loading, error }] = useCreateLeagueMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateLeagueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLeagueMutation, CreateLeagueMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLeagueMutation, CreateLeagueMutationVariables>(CreateLeagueDocument, baseOptions);
      }
export type CreateLeagueMutationHookResult = ReturnType<typeof useCreateLeagueMutation>;
export type CreateLeagueMutationResult = ApolloReactCommon.MutationResult<CreateLeagueMutation>;
export type CreateLeagueMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLeagueMutation, CreateLeagueMutationVariables>;
export const JoinLeagueDocument = gql`
    mutation JoinLeague($leagueId: String!) {
  joinLeague(leagueId: $leagueId) {
    uuid
    name
    accessCode
    members {
      uuid
      name
    }
  }
}
    `;
export type JoinLeagueMutationFn = ApolloReactCommon.MutationFunction<JoinLeagueMutation, JoinLeagueMutationVariables>;

/**
 * __useJoinLeagueMutation__
 *
 * To run a mutation, you first call `useJoinLeagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinLeagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinLeagueMutation, { data, loading, error }] = useJoinLeagueMutation({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useJoinLeagueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinLeagueMutation, JoinLeagueMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinLeagueMutation, JoinLeagueMutationVariables>(JoinLeagueDocument, baseOptions);
      }
export type JoinLeagueMutationHookResult = ReturnType<typeof useJoinLeagueMutation>;
export type JoinLeagueMutationResult = ApolloReactCommon.MutationResult<JoinLeagueMutation>;
export type JoinLeagueMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinLeagueMutation, JoinLeagueMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      uuid
      name
      email
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpsertPredictionDocument = gql`
    mutation UpsertPrediction($leagueId: String!, $week: Int!, $gameKey: String!, $season: String!, $stage: String!, $predictedWinner: Int!) {
  upsertPrediction(leagueId: $leagueId, season: $season, stage: $stage, week: $week, gameKey: $gameKey, predictedWinner: $predictedWinner) {
    gameKey
    leagueId
    week
    predictedWinner
    season
    stage
  }
}
    `;
export type UpsertPredictionMutationFn = ApolloReactCommon.MutationFunction<UpsertPredictionMutation, UpsertPredictionMutationVariables>;

/**
 * __useUpsertPredictionMutation__
 *
 * To run a mutation, you first call `useUpsertPredictionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPredictionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPredictionMutation, { data, loading, error }] = useUpsertPredictionMutation({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *      week: // value for 'week'
 *      gameKey: // value for 'gameKey'
 *      season: // value for 'season'
 *      stage: // value for 'stage'
 *      predictedWinner: // value for 'predictedWinner'
 *   },
 * });
 */
export function useUpsertPredictionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpsertPredictionMutation, UpsertPredictionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpsertPredictionMutation, UpsertPredictionMutationVariables>(UpsertPredictionDocument, baseOptions);
      }
export type UpsertPredictionMutationHookResult = ReturnType<typeof useUpsertPredictionMutation>;
export type UpsertPredictionMutationResult = ApolloReactCommon.MutationResult<UpsertPredictionMutation>;
export type UpsertPredictionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpsertPredictionMutation, UpsertPredictionMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $name: String!, $password: String!, $passwordConfirmation: String!) {
  register(email: $email, name: $name, password: $password, passwordConfirmation: $passwordConfirmation) {
    user {
      uuid
      name
      email
    }
    accessToken
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const AccessLeagueDocument = gql`
    query AccessLeague($accessCode: String!) {
  accessLeague(accessCode: $accessCode) {
    uuid
    members {
      uuid
      name
    }
    name
    accessCode
  }
}
    `;

/**
 * __useAccessLeagueQuery__
 *
 * To run a query within a React component, call `useAccessLeagueQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccessLeagueQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccessLeagueQuery({
 *   variables: {
 *      accessCode: // value for 'accessCode'
 *   },
 * });
 */
export function useAccessLeagueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AccessLeagueQuery, AccessLeagueQueryVariables>) {
        return ApolloReactHooks.useQuery<AccessLeagueQuery, AccessLeagueQueryVariables>(AccessLeagueDocument, baseOptions);
      }
export function useAccessLeagueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AccessLeagueQuery, AccessLeagueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AccessLeagueQuery, AccessLeagueQueryVariables>(AccessLeagueDocument, baseOptions);
        }
export type AccessLeagueQueryHookResult = ReturnType<typeof useAccessLeagueQuery>;
export type AccessLeagueLazyQueryHookResult = ReturnType<typeof useAccessLeagueLazyQuery>;
export type AccessLeagueQueryResult = ApolloReactCommon.QueryResult<AccessLeagueQuery, AccessLeagueQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($uuid: String!) {
  user(uuid: $uuid) {
    uuid
    name
    email
    leagues {
      uuid
      name
      accessCode
      members {
        name
        uuid
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const LeaderboardDocument = gql`
    query Leaderboard($leagueId: String!) {
  leaderboard(leagueId: $leagueId) {
    weeks {
      week
      results {
        ...userScore
      }
    }
    overall {
      ...userScore
    }
  }
}
    ${UserScoreFragmentDoc}`;

/**
 * __useLeaderboardQuery__
 *
 * To run a query within a React component, call `useLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useLeaderboardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LeaderboardQuery, LeaderboardQueryVariables>) {
        return ApolloReactHooks.useQuery<LeaderboardQuery, LeaderboardQueryVariables>(LeaderboardDocument, baseOptions);
      }
export function useLeaderboardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LeaderboardQuery, LeaderboardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LeaderboardQuery, LeaderboardQueryVariables>(LeaderboardDocument, baseOptions);
        }
export type LeaderboardQueryHookResult = ReturnType<typeof useLeaderboardQuery>;
export type LeaderboardLazyQueryHookResult = ReturnType<typeof useLeaderboardLazyQuery>;
export type LeaderboardQueryResult = ApolloReactCommon.QueryResult<LeaderboardQuery, LeaderboardQueryVariables>;
export const LocalLeagueIdDocument = gql`
    query LocalLeagueId {
  leagueId @client
}
    `;

/**
 * __useLocalLeagueIdQuery__
 *
 * To run a query within a React component, call `useLocalLeagueIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalLeagueIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalLeagueIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalLeagueIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LocalLeagueIdQuery, LocalLeagueIdQueryVariables>) {
        return ApolloReactHooks.useQuery<LocalLeagueIdQuery, LocalLeagueIdQueryVariables>(LocalLeagueIdDocument, baseOptions);
      }
export function useLocalLeagueIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LocalLeagueIdQuery, LocalLeagueIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LocalLeagueIdQuery, LocalLeagueIdQueryVariables>(LocalLeagueIdDocument, baseOptions);
        }
export type LocalLeagueIdQueryHookResult = ReturnType<typeof useLocalLeagueIdQuery>;
export type LocalLeagueIdLazyQueryHookResult = ReturnType<typeof useLocalLeagueIdLazyQuery>;
export type LocalLeagueIdQueryResult = ApolloReactCommon.QueryResult<LocalLeagueIdQuery, LocalLeagueIdQueryVariables>;
export const LoggedInUserDocument = gql`
    query LoggedInUser {
  loggedInUser @client
}
    `;

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
        return ApolloReactHooks.useQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, baseOptions);
      }
export function useLoggedInUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, baseOptions);
        }
export type LoggedInUserQueryHookResult = ReturnType<typeof useLoggedInUserQuery>;
export type LoggedInUserLazyQueryHookResult = ReturnType<typeof useLoggedInUserLazyQuery>;
export type LoggedInUserQueryResult = ApolloReactCommon.QueryResult<LoggedInUserQuery, LoggedInUserQueryVariables>;
export const PredictionsForWeekDocument = gql`
    query PredictionsForWeek($leagueId: String!, $season: String!, $stage: String!, $week: Int!) {
  predictionsForWeek(leagueId: $leagueId, season: $season, stage: $stage, week: $week) {
    gameKey
    leagueId
    predictedWinner
    week
    stage
  }
}
    `;

/**
 * __usePredictionsForWeekQuery__
 *
 * To run a query within a React component, call `usePredictionsForWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `usePredictionsForWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePredictionsForWeekQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *      season: // value for 'season'
 *      stage: // value for 'stage'
 *      week: // value for 'week'
 *   },
 * });
 */
export function usePredictionsForWeekQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PredictionsForWeekQuery, PredictionsForWeekQueryVariables>) {
        return ApolloReactHooks.useQuery<PredictionsForWeekQuery, PredictionsForWeekQueryVariables>(PredictionsForWeekDocument, baseOptions);
      }
export function usePredictionsForWeekLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PredictionsForWeekQuery, PredictionsForWeekQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PredictionsForWeekQuery, PredictionsForWeekQueryVariables>(PredictionsForWeekDocument, baseOptions);
        }
export type PredictionsForWeekQueryHookResult = ReturnType<typeof usePredictionsForWeekQuery>;
export type PredictionsForWeekLazyQueryHookResult = ReturnType<typeof usePredictionsForWeekLazyQuery>;
export type PredictionsForWeekQueryResult = ApolloReactCommon.QueryResult<PredictionsForWeekQuery, PredictionsForWeekQueryVariables>;
export const TeamStandingsDocument = gql`
    query TeamStandings($season: String!) {
  teamStandings(season: $season) {
    teamId
    wins
    losses
    ties
    name
    team
  }
}
    `;

/**
 * __useTeamStandingsQuery__
 *
 * To run a query within a React component, call `useTeamStandingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamStandingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamStandingsQuery({
 *   variables: {
 *      season: // value for 'season'
 *   },
 * });
 */
export function useTeamStandingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeamStandingsQuery, TeamStandingsQueryVariables>) {
        return ApolloReactHooks.useQuery<TeamStandingsQuery, TeamStandingsQueryVariables>(TeamStandingsDocument, baseOptions);
      }
export function useTeamStandingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeamStandingsQuery, TeamStandingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeamStandingsQuery, TeamStandingsQueryVariables>(TeamStandingsDocument, baseOptions);
        }
export type TeamStandingsQueryHookResult = ReturnType<typeof useTeamStandingsQuery>;
export type TeamStandingsLazyQueryHookResult = ReturnType<typeof useTeamStandingsLazyQuery>;
export type TeamStandingsQueryResult = ApolloReactCommon.QueryResult<TeamStandingsQuery, TeamStandingsQueryVariables>;
export const WeeklyScheduleDocument = gql`
    query WeeklySchedule($season: String!, $week: String!) {
  weeklySchedule(season: $season, week: $week) {
    status
    gameKey
    awayTeam
    homeTeam
    awayScore
    homeScore
    awayTeamId
    homeTeamId
  }
}
    `;

/**
 * __useWeeklyScheduleQuery__
 *
 * To run a query within a React component, call `useWeeklyScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeeklyScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeeklyScheduleQuery({
 *   variables: {
 *      season: // value for 'season'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useWeeklyScheduleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WeeklyScheduleQuery, WeeklyScheduleQueryVariables>) {
        return ApolloReactHooks.useQuery<WeeklyScheduleQuery, WeeklyScheduleQueryVariables>(WeeklyScheduleDocument, baseOptions);
      }
export function useWeeklyScheduleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WeeklyScheduleQuery, WeeklyScheduleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WeeklyScheduleQuery, WeeklyScheduleQueryVariables>(WeeklyScheduleDocument, baseOptions);
        }
export type WeeklyScheduleQueryHookResult = ReturnType<typeof useWeeklyScheduleQuery>;
export type WeeklyScheduleLazyQueryHookResult = ReturnType<typeof useWeeklyScheduleLazyQuery>;
export type WeeklyScheduleQueryResult = ApolloReactCommon.QueryResult<WeeklyScheduleQuery, WeeklyScheduleQueryVariables>;