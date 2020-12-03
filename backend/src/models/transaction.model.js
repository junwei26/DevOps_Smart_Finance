module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      amount: Number,
      type: Number,
      date: Date,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Transaction = mongoose.model("transaction", schema);
  return Transaction;
};
