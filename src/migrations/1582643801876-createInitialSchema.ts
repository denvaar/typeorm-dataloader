import {MigrationInterface, QueryRunner} from "typeorm";

export class createInitialSchema1582643801876 implements MigrationInterface {
    name = 'createInitialSchema1582643801876'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "number_of_pages" integer NOT NULL, "rating" integer NOT NULL, "author_id" integer, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_24b753b0490a992a6941451f405"`, undefined);
        await queryRunner.query(`DROP TABLE "author"`, undefined);
        await queryRunner.query(`DROP TABLE "book"`, undefined);
    }

}
