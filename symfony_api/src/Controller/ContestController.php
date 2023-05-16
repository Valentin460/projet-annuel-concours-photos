<?php

namespace App\Controller;

use App\Repository\ContestsRepository;
use App\Repository\MembersContestsRepository;
use App\Repository\MembersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class Contestroller extends AbstractController
{
    #[Route('/contest/members', name: 'Contest_members')]
    public function getMembersOfaContest(MembersRepository $membersRepository ,MembersContestsRepository $membersContestsRepository, Request $request)
    {
        $contest =  5; 
        $members = [];
        $membersContests = $membersContestsRepository->findBy(['contest_id' , $contest]);

        foreach ($membersContests as $memberContest) {
            array_push($members, $membersRepository->findBy(['id', $memberContest->members_id]));
        }
    }
}
