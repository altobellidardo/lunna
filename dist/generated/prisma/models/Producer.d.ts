import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProducerModel = runtime.Types.Result.DefaultSelection<Prisma.$ProducerPayload>;
export type AggregateProducer = {
    _count: ProducerCountAggregateOutputType | null;
    _min: ProducerMinAggregateOutputType | null;
    _max: ProducerMaxAggregateOutputType | null;
};
export type ProducerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    website: string | null;
    logo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProducerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    website: string | null;
    logo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProducerCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    website: number;
    logo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProducerMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    website?: true;
    logo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProducerMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    website?: true;
    logo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProducerCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    website?: true;
    logo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProducerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProducerCountAggregateInputType;
    _min?: ProducerMinAggregateInputType;
    _max?: ProducerMaxAggregateInputType;
};
export type GetProducerAggregateType<T extends ProducerAggregateArgs> = {
    [P in keyof T & keyof AggregateProducer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducer[P]> : Prisma.GetScalarType<T[P], AggregateProducer[P]>;
};
export type ProducerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithAggregationInput | Prisma.ProducerOrderByWithAggregationInput[];
    by: Prisma.ProducerScalarFieldEnum[] | Prisma.ProducerScalarFieldEnum;
    having?: Prisma.ProducerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProducerCountAggregateInputType | true;
    _min?: ProducerMinAggregateInputType;
    _max?: ProducerMaxAggregateInputType;
};
export type ProducerGroupByOutputType = {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
    website: string | null;
    logo: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProducerCountAggregateOutputType | null;
    _min: ProducerMinAggregateOutputType | null;
    _max: ProducerMaxAggregateOutputType | null;
};
type GetProducerGroupByPayload<T extends ProducerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProducerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProducerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProducerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProducerGroupByOutputType[P]>;
}>>;
export type ProducerWhereInput = {
    AND?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    OR?: Prisma.ProducerWhereInput[];
    NOT?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    id?: Prisma.StringFilter<"Producer"> | string;
    name?: Prisma.StringFilter<"Producer"> | string;
    email?: Prisma.StringNullableFilter<"Producer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Producer"> | string | null;
    website?: Prisma.StringNullableFilter<"Producer"> | string | null;
    logo?: Prisma.StringNullableFilter<"Producer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Producer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producer"> | Date | string;
    events?: Prisma.EventListRelationFilter;
};
export type ProducerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    events?: Prisma.EventOrderByRelationAggregateInput;
};
export type ProducerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    OR?: Prisma.ProducerWhereInput[];
    NOT?: Prisma.ProducerWhereInput | Prisma.ProducerWhereInput[];
    name?: Prisma.StringFilter<"Producer"> | string;
    email?: Prisma.StringNullableFilter<"Producer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Producer"> | string | null;
    website?: Prisma.StringNullableFilter<"Producer"> | string | null;
    logo?: Prisma.StringNullableFilter<"Producer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Producer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producer"> | Date | string;
    events?: Prisma.EventListRelationFilter;
}, "id">;
export type ProducerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProducerCountOrderByAggregateInput;
    _max?: Prisma.ProducerMaxOrderByAggregateInput;
    _min?: Prisma.ProducerMinOrderByAggregateInput;
};
export type ProducerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProducerScalarWhereWithAggregatesInput | Prisma.ProducerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProducerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProducerScalarWhereWithAggregatesInput | Prisma.ProducerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Producer"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Producer"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Producer"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"Producer"> | string | null;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Producer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Producer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Producer"> | Date | string;
};
export type ProducerCreateInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventCreateNestedManyWithoutProducerInput;
};
export type ProducerUncheckedCreateInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutProducerInput;
};
export type ProducerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUpdateManyWithoutProducerNestedInput;
};
export type ProducerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.EventUncheckedUpdateManyWithoutProducerNestedInput;
};
export type ProducerCreateManyInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProducerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProducerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProducerNullableScalarRelationFilter = {
    is?: Prisma.ProducerWhereInput | null;
    isNot?: Prisma.ProducerWhereInput | null;
};
export type ProducerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProducerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProducerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProducerCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutEventsInput, Prisma.ProducerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutEventsInput;
    connect?: Prisma.ProducerWhereUniqueInput;
};
export type ProducerUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.ProducerCreateWithoutEventsInput, Prisma.ProducerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ProducerCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.ProducerUpsertWithoutEventsInput;
    disconnect?: Prisma.ProducerWhereInput | boolean;
    delete?: Prisma.ProducerWhereInput | boolean;
    connect?: Prisma.ProducerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProducerUpdateToOneWithWhereWithoutEventsInput, Prisma.ProducerUpdateWithoutEventsInput>, Prisma.ProducerUncheckedUpdateWithoutEventsInput>;
};
export type ProducerCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProducerUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProducerCreateOrConnectWithoutEventsInput = {
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutEventsInput, Prisma.ProducerUncheckedCreateWithoutEventsInput>;
};
export type ProducerUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.ProducerUpdateWithoutEventsInput, Prisma.ProducerUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.ProducerCreateWithoutEventsInput, Prisma.ProducerUncheckedCreateWithoutEventsInput>;
    where?: Prisma.ProducerWhereInput;
};
export type ProducerUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.ProducerWhereInput;
    data: Prisma.XOR<Prisma.ProducerUpdateWithoutEventsInput, Prisma.ProducerUncheckedUpdateWithoutEventsInput>;
};
export type ProducerUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProducerUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProducerCountOutputType = {
    events: number;
};
export type ProducerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | ProducerCountOutputTypeCountEventsArgs;
};
export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerCountOutputTypeSelect<ExtArgs> | null;
};
export type ProducerCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
export type ProducerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    website?: boolean;
    logo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    events?: boolean | Prisma.Producer$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProducerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    website?: boolean;
    logo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    website?: boolean;
    logo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producer"]>;
export type ProducerSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    website?: boolean;
    logo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProducerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "website" | "logo" | "createdAt" | "updatedAt", ExtArgs["result"]["producer"]>;
export type ProducerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.Producer$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProducerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProducerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProducerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProducerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Producer";
    objects: {
        events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string | null;
        phone: string | null;
        website: string | null;
        logo: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["producer"]>;
    composites: {};
};
export type ProducerGetPayload<S extends boolean | null | undefined | ProducerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProducerPayload, S>;
export type ProducerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProducerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProducerCountAggregateInputType | true;
};
export interface ProducerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Producer'];
        meta: {
            name: 'Producer';
        };
    };
    findUnique<T extends ProducerFindUniqueArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProducerFindFirstArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProducerFindManyArgs>(args?: Prisma.SelectSubset<T, ProducerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProducerCreateArgs>(args: Prisma.SelectSubset<T, ProducerCreateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProducerCreateManyArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProducerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProducerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProducerDeleteArgs>(args: Prisma.SelectSubset<T, ProducerDeleteArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProducerUpdateArgs>(args: Prisma.SelectSubset<T, ProducerUpdateArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProducerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProducerUpdateManyArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProducerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProducerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProducerUpsertArgs>(args: Prisma.SelectSubset<T, ProducerUpsertArgs<ExtArgs>>): Prisma.Prisma__ProducerClient<runtime.Types.Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProducerCountArgs>(args?: Prisma.Subset<T, ProducerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProducerCountAggregateOutputType> : number>;
    aggregate<T extends ProducerAggregateArgs>(args: Prisma.Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>;
    groupBy<T extends ProducerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProducerGroupByArgs['orderBy'];
    } : {
        orderBy?: ProducerGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProducerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProducerFieldRefs;
}
export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.Producer$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producer$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProducerFieldRefs {
    readonly id: Prisma.FieldRef<"Producer", 'String'>;
    readonly name: Prisma.FieldRef<"Producer", 'String'>;
    readonly email: Prisma.FieldRef<"Producer", 'String'>;
    readonly phone: Prisma.FieldRef<"Producer", 'String'>;
    readonly website: Prisma.FieldRef<"Producer", 'String'>;
    readonly logo: Prisma.FieldRef<"Producer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Producer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Producer", 'DateTime'>;
}
export type ProducerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
export type ProducerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
export type ProducerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput | Prisma.ProducerOrderByWithRelationInput[];
    cursor?: Prisma.ProducerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProducerScalarFieldEnum | Prisma.ProducerScalarFieldEnum[];
};
export type ProducerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
};
export type ProducerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProducerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    data: Prisma.ProducerCreateManyInput | Prisma.ProducerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProducerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    where?: Prisma.ProducerWhereInput;
    limit?: number;
};
export type ProducerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProducerUpdateManyMutationInput, Prisma.ProducerUncheckedUpdateManyInput>;
    where?: Prisma.ProducerWhereInput;
    limit?: number;
};
export type ProducerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProducerCreateInput, Prisma.ProducerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProducerUpdateInput, Prisma.ProducerUncheckedUpdateInput>;
};
export type ProducerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
    where: Prisma.ProducerWhereUniqueInput;
};
export type ProducerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProducerWhereInput;
    limit?: number;
};
export type Producer$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type ProducerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProducerSelect<ExtArgs> | null;
    omit?: Prisma.ProducerOmit<ExtArgs> | null;
    include?: Prisma.ProducerInclude<ExtArgs> | null;
};
export {};
