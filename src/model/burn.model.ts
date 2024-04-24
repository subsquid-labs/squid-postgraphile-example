import {Entity, PrimaryColumn, IntColumn, StringColumn, BigIntColumn, Index} from "@subsquid/typeorm-store"

@Entity()
export class Burn {
    constructor(props?: Partial<Burn>) {
        Object.assign(this, props)
    }

    @PrimaryColumn()
    id!: string

    @IntColumn({nullable: false})
    block!: number

    @Index()
    @StringColumn({nullable: false})
    address!: string

    @BigIntColumn({nullable: false})
    value!: bigint

    @StringColumn({nullable: false})
    txHash!: string
}
