import FormField from "./FormField";

export default function BillingDetailsFields () {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="John Smith"
        required
      />

      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="johnsmith@example.com"
        required
      />

      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="145 Whitby Street"
        required
      />

      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="London"
        required
      />

      <FormField
        name="postcode"
        label="Postcode"
        type="text"
        placeholder="SE1 7FG"
        required
      />
    </>
  )
}