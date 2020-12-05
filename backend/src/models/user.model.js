module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      user: {
        type: String,
        required: true,
        unique: true,
      },
      pass: {
        type: String,
        required: true,
      },
      transactions: [
        {
          amount: {
            type: Number,
            min: 0,
          },
          type: {
            type: Number,
            min: 0,
            max: 7,
          },
          date: Date,
        },
      ],
      accounts: [
        {
          amount: {
            type: Number,
            min: 0,
          },
          type: {
            type: Number,
            min: 0,
            max: 1,
          },
          budget: {
            type: Number,
            min: 0,
          },
        },
      ],
    },
    { timestamps: true }
  );

  const User = mongoose.model("user", schema);
  return User;
};
