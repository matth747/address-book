const { AuthenticationError } = require('apollo-server-express');
const { User, Address } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('addresses')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // address: async (parent, args, context) => {
    //   if (context.user) {
    //     const oneAdd = await Address.findById({

    //     })
    //   }
    // }
    address: async (parent, { _id }) => {
      return Address.findOne({ _id });
    }

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addAdd: async (parent, args, context) => {
      if (context.user) {
        const newAdd = await Address.create({ ...args, username: context.user.username });

        await User.findOneAndUpdate(
          { _id: context.user._id},
          { $addToSet: { addresses: newAdd._id}}
        )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        return newAdd;
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    editAdd: async (parent, {addId, name, streetAddress, cityState, zipCode, notes, phone}, context) => {
      if (context.user) {
        const newAdd = await Address.findOneAndUpdate(
          {_id: addId },
          { name: name, streetAddress: streetAddress, cityState: cityState, zipCode: zipCode, notes: notes, phone: phone},
          { new: true, runValidators: true }
          )
          return newAdd;
      }
    },
    removeAdd: async (parent, {addId }, context) => {
      if(context.user) {
        const deletedAdd = await Address.findOneAndDelete(
          {_id: addId },
          { new: true, runValidators: true }

        )
        return deletedAdd;
      }
    }


  }
};

module.exports = resolvers;
