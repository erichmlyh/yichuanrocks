export default function({Mobile = null, Pc = null, name = "unname", options = {}}) {
    return {
      name,
      props: { mobile: Boolean },
      render(h) {
          return this.mobile ? h(Mobile, options) : h(Pc, options);
      }
    };
}