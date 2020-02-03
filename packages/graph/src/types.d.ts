import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
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
  user?: Maybe<User>,
  league?: Maybe<League>,
  leagues: Array<Maybe<League>>,
  weeklySchedule?: Maybe<Array<Maybe<WeeklySchedule>>>,
  accessLeague?: Maybe<League>,
  predictionsForWeek?: Maybe<Array<Maybe<Prediction>>>,
  teamStandings?: Maybe<Array<Maybe<TeamRecord>>>,
  leaderboard?: Maybe<Leaderboard>,
};


export type QueryUserArgs = {
  uuid: Scalars['String']
};


export type QueryLeagueArgs = {
  uuid: Scalars['String']
};


export type QueryWeeklyScheduleArgs = {
  season: Scalars['String'],
  week: Scalars['String']
};


export type QueryAccessLeagueArgs = {
  accessCode: Scalars['String']
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


export type QueryLeaderboardArgs = {
  leagueId: Scalars['String']
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
  user?: Maybe<Scalars['String']>,
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  League: ResolverTypeWrapper<League>,
  Prediction: ResolverTypeWrapper<Prediction>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  WeeklySchedule: ResolverTypeWrapper<WeeklySchedule>,
  TeamRecord: ResolverTypeWrapper<TeamRecord>,
  Leaderboard: ResolverTypeWrapper<Leaderboard>,
  Week: ResolverTypeWrapper<Week>,
  UserScore: ResolverTypeWrapper<UserScore>,
  Mutation: ResolverTypeWrapper<{}>,
  Auth: ResolverTypeWrapper<Auth>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  User: User,
  League: League,
  Prediction: Prediction,
  Int: Scalars['Int'],
  WeeklySchedule: WeeklySchedule,
  TeamRecord: TeamRecord,
  Leaderboard: Leaderboard,
  Week: Week,
  UserScore: UserScore,
  Mutation: {},
  Auth: Auth,
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
}>;

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
}>;

export type LeaderboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leaderboard'] = ResolversParentTypes['Leaderboard']> = ResolversObject<{
  weeks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Week']>>>, ParentType, ContextType>,
  overall?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScore']>>>, ParentType, ContextType>,
}>;

export type LeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['League'] = ResolversParentTypes['League']> = ResolversObject<{
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  accessCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  predictions?: Resolver<Array<Maybe<ResolversTypes['Prediction']>>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  login?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
  register?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'name' | 'email' | 'password' | 'passwordConfirmation'>>,
  createLeague?: Resolver<ResolversTypes['League'], ParentType, ContextType, RequireFields<MutationCreateLeagueArgs, 'name'>>,
  joinLeague?: Resolver<ResolversTypes['League'], ParentType, ContextType, RequireFields<MutationJoinLeagueArgs, 'leagueId'>>,
  upsertPrediction?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prediction']>>>, ParentType, ContextType, RequireFields<MutationUpsertPredictionArgs, 'leagueId' | 'week' | 'gameKey' | 'predictedWinner' | 'stage' | 'season'>>,
}>;

export type PredictionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prediction'] = ResolversParentTypes['Prediction']> = ResolversObject<{
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  gameKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  predictedWinner?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  season?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'uuid'>>,
  league?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType, RequireFields<QueryLeagueArgs, 'uuid'>>,
  leagues?: Resolver<Array<Maybe<ResolversTypes['League']>>, ParentType, ContextType>,
  weeklySchedule?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklySchedule']>>>, ParentType, ContextType, RequireFields<QueryWeeklyScheduleArgs, 'season' | 'week'>>,
  accessLeague?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType, RequireFields<QueryAccessLeagueArgs, 'accessCode'>>,
  predictionsForWeek?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prediction']>>>, ParentType, ContextType, RequireFields<QueryPredictionsForWeekArgs, 'leagueId' | 'week' | 'stage' | 'season'>>,
  teamStandings?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamRecord']>>>, ParentType, ContextType, RequireFields<QueryTeamStandingsArgs, 'season'>>,
  leaderboard?: Resolver<Maybe<ResolversTypes['Leaderboard']>, ParentType, ContextType, RequireFields<QueryLeaderboardArgs, 'leagueId'>>,
}>;

export type TeamRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamRecord'] = ResolversParentTypes['TeamRecord']> = ResolversObject<{
  season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ties?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  leagues?: Resolver<Array<Maybe<ResolversTypes['League']>>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type UserScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserScore'] = ResolversParentTypes['UserScore']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
}>;

export type WeekResolvers<ContextType = any, ParentType extends ResolversParentTypes['Week'] = ResolversParentTypes['Week']> = ResolversObject<{
  week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScore']>>>, ParentType, ContextType>,
}>;

export type WeeklyScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklySchedule'] = ResolversParentTypes['WeeklySchedule']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gameKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  awayTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  homeTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  awayScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  homeScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  awayTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  homeTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
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
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
}>;


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;