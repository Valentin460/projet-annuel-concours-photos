<?php

namespace App\Controller;

use App\Entity\Photo;
use DateTimeImmutable;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;

class FilesController extends AbstractController
{
    #[Route('/api/files', name: 'addFile')]
    public function AddFile(Request $request, ManagerRegistry $doctrine)
    {

        $entityManager = $doctrine->getManager();

        $requestedFiles = $request->files->get('files');
        foreach ( $requestedFiles as $element) {

            $file = $element;
            $filename = md5(uniqid()) . '.' . $file->guessExtension();
            try {
                    $file->move(
                        $this->getParameter('uploaded_file_directory'),
                        $filename
                    );
                } 
            catch (FileException $e) {
                    $e;
            }

            $newfile = new Photo();
            $newfile->setNamePhoto($filename);
            // $newfile->setExtension('png');
            // $newfile->setPath('uploads/files/'.$filename);
            // $newfile->setCreatedBy($user);
            // $newfile->setCreatedAt(new DateTimeImmutable());

            $entityManager->persist($newfile);
            $entityManager->flush();
        }
    }
}
