import { Model, Table, Field } from "../src";

@Table({
    dbName: "someTableName"
})
class TestOne extends Model {
    @Field() public oneColumn1: number;
    @Field() public oneColumn2: string;
}

@Table()
class TestTwo extends Model {
    @Field({ dbName: "dbNameTwoColumn" }) public twoColumn1: number;
    @Field() public twoColumn2: string;
}

describe("Base Model Testing", () => {

    test("Filter testing: table name", () => {
        expect(TestOne.objects.filter().indexOf("someTableName")).toBeGreaterThan(0);
        expect(TestTwo.objects.filter().indexOf("TestTwo")).toBeGreaterThan(0);
    });

    test("Filter testing: custom column name", () => {
        expect(TestTwo.objects.filter().indexOf("dbNameTwoColumn")).toBeGreaterThan(0);
    });
});
