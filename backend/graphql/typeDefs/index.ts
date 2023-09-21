export default `type Company {
  _id: ID!
  companyName: String
  logo: String
  managerName: String
  activity: String
  sectorActivity: String
  products:[String]
  country:String
  state:String
  city:String
  lang:String
  address:String
  phone:String
  cell:String
  email:String
  website:String
  facebook:String
  services:String
  slug:String
  created:Float  
}

input InputCompanyType {
  companyName: String!
  logo: String
  managerName: String!
  activity: String!
  sectorActivity: String!
  products:[String]
  country:String
  state:String
  city:String
  address:String!
  phone:String
  cell:String
  email:String!
  website:String
  facebook:String
  services:String
}

type Mutation {
  createCompany(body: InputCompanyType!): Company
  updateCompany(_id: ID!, body: InputCompanyType!): Company
  deleteCompany(_id: ID!): Company
}

type PaginationType {
  page: Int
  pages: Int
  count: Int
}

type EdgesType {
  edges: [Company]
  pagination: PaginationType
}

type Query {
  readCompany(_id: ID!): Company
  listCompany(page: Int, limit: Int, sortBy: String, sortOrder: String): EdgesType
  searchCompany(limit: Int, query: String!, fields: String!): [Company] 
}
`;