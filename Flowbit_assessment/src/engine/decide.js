
export function decide(corrections) {
  if (corrections.length === 0) {
    return {review:true, reason:"No confident memory"};
  }
  return {review:false, reason:"Confident learned memory applied"};
}
