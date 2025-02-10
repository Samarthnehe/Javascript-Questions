// DIFFICULTY LEVEL: EASY
// COMPANY TAGS: ZEPTO

function usePrevious(value) {
  // create a new reference
  const ref = useRef();

  // store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // only re-run if value changes

  // return previous value (happens before update in useEffect above)
  return ref.current;
}
