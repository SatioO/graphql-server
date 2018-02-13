import { client } from "../config/connection";
import { Profiles, Projects, Demos } from "../store";

export const Search = {
	find: async (_, { query = null, pageOffset = 0, pageLength = 10 }) => {
		try {
			const store = await Promise.all([
				Search.profiles(query, pageOffset, pageLength),
				Search.projects(query, pageOffset, pageLength),
				Search.demos(query, pageOffset, pageLength)
			]);

			return {
				pageOffset: pageOffset,
				pageLength: pageLength,
				profiles: {
					total: store[0].hits.total,
					items: store[0].hits.hits.map(profile => profile._source)
				},
				projects: {
					total: store[1].hits.total,
					items: store[1].hits.hits.map(project => project._source)
				},
				demos: {
					total: store[2].hits.total,
					items: store[2].hits.hits.map(demo => demo._source)
				}
			};
		} catch (error) {
			return error;
		}
	},
	findOne: async (
		_,
		{ category, query = null, pageOffset = 0, pageLength = 10 },
		context,
		graph
	) => {
		try {
			let results = null;
			if (category === "profiles") {
				results = await Search.profiles(query, pageOffset, pageLength);
				return new Profiles(
					pageOffset,
					pageLength,
					results.hits.total,
					results.hits.hits.map(result => result._source)
				);
			} else if (category === "projects") {
				results = await Search.projects(query, pageOffset, pageLength);
				return new Projects(
					pageOffset,
					pageLength,
					results.hits.total,
					results.hits.hits.map(result => result._source)
				);
			} else if (category === "demos") {
				results = await Search.demos(query, pageOffset, pageLength);
				return new Demos(
					pageOffset,
					pageLength,
					results.hits.total,
					results.hits.hits.map(result => result._source)
				);
			} else {
				throw new TypeError("Unknown Category");
			}
		} catch (error) {
			return error;
		}
	},
	profiles: (query, pageOffset, pageLength) => {
		return client.search({
			index: "aic",
			type: "profiles",
			body: {
				from: pageOffset,
				size: pageLength,
				query: {
					bool: {
						must: {
							multi_match: {
								query: query,
								type: "best_fields",
								fields: [
									"name",
									"email",
									"introduction",
									"description",
									"skills.*",
									"location",
									"designation",
									"tagline",
									"tags",
									"photograph",
									"education"
								],
								operator: "and"
							}
						},
						filter: {
							term: {
								profileStatus: "active"
							}
						}
					}
				},
				aggs: {
					ui: {
						terms: {
							field: "skills.ui"
						}
					},
					db: {
						terms: {
							field: "skills.db"
						}
					},
					cloud: {
						terms: {
							field: "skills.cloud"
						}
					},
					app: {
						terms: {
							field: "skills.app"
						}
					},
					devops: {
						terms: {
							field: "skills.devops"
						}
					}
				}
			}
		});
	},
	demos: (query, pageOffset, pageLength) => {
		return client.search({
			index: "aic",
			type: "presentations",
			body: {
				query: {
					bool: {
						must: {
							multi_match: {
								query: query,
								type: "best_fields",
								fields: [
									"id",
									"title",
									"tagline",
									"description",
									"techstack.*",
									"authors",
									"categories",
									"milestone"
								],
								operator: "and"
							}
						},
						filter: {
							term: {
								milestone: "approved"
							}
						}
					}
				},
				aggs: {
					ui: {
						terms: {
							field: "techstack.ui"
						}
					},
					db: {
						terms: {
							field: "techstack.db"
						}
					},
					cloud: {
						terms: {
							field: "techstack.cloud"
						}
					},
					app: {
						terms: {
							field: "techstack.app"
						}
					},
					devops: {
						terms: {
							field: "techstack.devops"
						}
					}
				}
			}
		});
	},
	projects: (query, pageOffset, pageLength) => {
		return client.search({
			index: "aic",
			type: "projects",
			body: {
				query: {
					bool: {
						must: {
							multi_match: {
								query: query,
								type: "best_fields",
								fields: [
									"project_id",
									"project_name",
									"tags",
									"description",
									"techstack.*",
									"client_name",
									"project_docs"
								],
								operator: "and"
							}
						},
						filter: {
							term: {
								is_approved: "1"
							}
						}
					}
				},
				aggs: {
					ui: {
						terms: {
							field: "techstack.ui"
						}
					},
					db: {
						terms: {
							field: "techstack.db"
						}
					},
					cloud: {
						terms: {
							field: "techstack.cloud"
						}
					},
					app: {
						terms: {
							field: "techstack.app"
						}
					},
					devops: {
						terms: {
							field: "techstack.devops"
						}
					}
				}
			}
		});
	}
};
