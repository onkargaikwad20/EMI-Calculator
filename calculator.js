function calculateEMI()
{
    const loanAmount=document.getElementById("loanAmount").value;
    const interestRate=document.getElementById("interestRate").value;
    const loanTenure=document.getElementById("loanTenure").value;

    if ( loanAmount===" " || interestRate===" " || loanTenure===" ")
    {
        alert("Please fill in all the fields.");
        return;
    }

    const monthlyInterestRate = (interestRate / 12) / 100;
    const totalMonths = loanTenure * 12;
    const emi = (loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalMonths)) / (Math.pow((1 + monthlyInterestRate), totalMonths) - 1);

    document.getElementById('emiResult').textContent = emi.toFixed(2);
}