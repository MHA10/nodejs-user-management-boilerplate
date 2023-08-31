import { DataSource, EntityTarget, Repository } from "typeorm";

export const init = async (datasource: DataSource) => {
    await datasource
        .initialize()
        .then(() => console.log("Database connected"))
        .catch((error: any) =>
            console.log(
                "Something went wrong while connecting database",
                error,
            ),
        );
};

export const getRepository = (
    datasource: DataSource,
    repo: EntityTarget<any>,
): Repository<any> => {
    return datasource.getRepository(repo);
};
