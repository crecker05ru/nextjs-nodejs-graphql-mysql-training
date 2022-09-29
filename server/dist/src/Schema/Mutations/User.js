"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.UPDATE_PASSWORD = exports.LOGGIN_USER = exports.CREATE_USER = void 0;
const Messages_1 = require("./../TypeDefs/Messages");
const graphql_1 = require("graphql");
const Users_1 = require("./../../Entities/Users");
const graphql_2 = require("graphql");
const User_1 = require("./../TypeDefs/User");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        name: { type: graphql_2.GraphQLString },
        username: { type: graphql_2.GraphQLString },
        password: { type: graphql_2.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password } = args;
            yield Users_1.Users.insert({ name, username, password });
            return args;
        });
    },
};
exports.LOGGIN_USER = {
    type: User_1.UserType,
    args: {
        username: { type: graphql_2.GraphQLString },
        password: { type: graphql_2.GraphQLString },
        logged: { type: graphql_2.GraphQLBoolean }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, logged } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (username !== username && password !== password) {
                throw new Error("Wrong username or password");
            }
            if (username === username && password === password) {
                yield Users_1.Users.update({ username: username }, { password: password });
            }
        });
    }
};
exports.UPDATE_PASSWORD = {
    type: Messages_1.MessageType,
    args: {
        username: { type: graphql_2.GraphQLString },
        oldPassword: { type: graphql_2.GraphQLString },
        newPassword: { type: graphql_2.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, oldPassword, newPassword } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (!user) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (oldPassword === userPassword) {
                yield Users_1.Users.update({ username: username }, { password: newPassword });
                return {
                    successful: true, message: "PASSWORD UPDATED"
                };
            }
            else {
                throw new Error("PASSWORDS NOT MATCH!");
            }
        });
    }
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = args.id;
            yield Users_1.Users.delete(id);
            return {
                successful: true, message: "USER DELETED"
            };
        });
    }
};
//# sourceMappingURL=User.js.map